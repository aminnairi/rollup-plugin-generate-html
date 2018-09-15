import { resolve } from 'path'
import { writeFile } from 'fs'
import baseDirectory from './baseDirectory'
import scriptTagsFrom from './scriptTagsFrom'

const pretty = require('pretty')

export const generateHtml = () => ({
  generateBundle({ file }, bundle) {
    const path      = resolve(baseDirectory(file), 'index.html')
    const data      = pretty(`<!doctype html><head><meta charset='utf-8'><title>My Application</title></head><html><body>${scriptTagsFrom(bundle)}</body></html>`, { ocd: true })
    const encoding  = 'utf-8'

    writeFile(path, data, encoding, error => error && this.error(error))
  }
})