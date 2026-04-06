import { spawn } from 'node:child_process'

const port = 4100
const baseUrl = `http://127.0.0.1:${port}`

const server = spawn('npm', ['run', 'dev', '--', '--port', String(port)], {
  stdio: 'pipe',
  env: { ...process.env, NODE_ENV: 'development' },
})

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

try {
  await waitForServer()
  await assertOk('/')
  await assertOk('/projects')
  await assertOk('/contact')
  console.log('Smoke test passed for /, /projects, and /contact.')
} finally {
  server.kill('SIGTERM')
}
