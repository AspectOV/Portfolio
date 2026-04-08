import test from 'node:test'
import assert from 'node:assert/strict'
import { readFile } from 'node:fs/promises'

test('Project content is structured for case studies instead of placeholder links', async () => {
  const file = await readFile(
    new URL('../src/content/siteContent.ts', import.meta.url),
    'utf8'
  )

  assert.doesNotMatch(file, /'#'/)
  assert.match(file, /slug:\s*'portfolio-website'/)
  assert.match(file, /problem:\s*'/)
  assert.match(file, /lessons:\s*\[/)
  assert.match(file, /updatedAt:\s*'2026-04-07'/)
})
