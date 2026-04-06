import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

test('Footer keeps privacy policy and social link labels', async () => {
  const file = await readFile(new URL('../src/components/Footer.tsx', import.meta.url), 'utf8')

  assert.match(file, /Privacy Policy/)
  assert.match(file, /name: 'GitHub'/)
  assert.match(file, /name: 'LinkedIn'/)
})
