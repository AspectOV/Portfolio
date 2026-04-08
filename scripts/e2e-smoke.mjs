import { spawn } from 'node:child_process'

const port = 4100
const baseUrl = `http://127.0.0.1:${port}`
const serverCommand =
  process.platform === 'win32'
    ? ['cmd.exe', ['/c', 'npm', 'run', 'dev', '--', '--port', String(port)]]
    : ['npm', ['run', 'dev', '--', '--port', String(port)]]

const server = spawn(serverCommand[0], serverCommand[1], {
  stdio: 'pipe',
  env: { ...process.env, NODE_ENV: 'development' },
})

const stopServer = async () => {
  if (!server.pid) return

  await new Promise((resolve) => {
    if (process.platform === 'win32') {
      const killer = spawn('taskkill', ['/pid', String(server.pid), '/t', '/f'], {
        stdio: 'ignore',
      })

      killer.on('exit', resolve)
      killer.on('error', resolve)
      return
    }

    server.once('exit', resolve)
    server.kill('SIGTERM')
  })

  server.stdout?.destroy()
  server.stderr?.destroy()
}

const waitForServer = async (timeoutMs = 40000) => {
  const start = Date.now()

  while (Date.now() - start < timeoutMs) {
    try {
      const response = await fetch(baseUrl)
      if (response.ok) return
    } catch {
      // server still booting
    }

    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  throw new Error('Smoke test timed out waiting for dev server.')
}

const assertOk = async (path) => {
  const response = await fetch(`${baseUrl}${path}`)

  if (!response.ok) {
    throw new Error(`Expected ${path} to return 200 but received ${response.status}.`)
  }
}

const assertRedirect = async (path, expectedLocation) => {
  const response = await fetch(`${baseUrl}${path}`, {
    redirect: 'manual',
  })

  if (response.status !== 308) {
    throw new Error(`Expected ${path} to return 308 but received ${response.status}.`)
  }

  const location = response.headers.get('location')

  if (location !== expectedLocation) {
    throw new Error(
      `Expected ${path} to redirect to ${expectedLocation} but received ${location}.`
    )
  }
}

try {
  await waitForServer()
  await assertOk('/')
  await assertOk('/about')
  await assertOk('/projects')
  await assertOk('/projects/portfolio-website')
  await assertOk('/contact')
  await assertRedirect('/portfolio', '/projects')
  console.log(
    'Smoke test passed for home, about, archive, case study, contact, and portfolio redirect.'
  )
} finally {
  await stopServer()
}
