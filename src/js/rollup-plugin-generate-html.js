import { resolve }    from 'path'
import { writeFile }  from 'fs'

const pretty = require('pretty')

const baseDirectory   = file => file.slice(0, file.lastIndexOf('/'))
const fileToScript    = file => `<script src='./${file}'></script>`
const scriptTagsFrom  = bundle => Object.keys(bundle).map(fileToScript).join('')

export const generateHtml = () => ({
  generateBundle({ file }, bundle) {
    const path      = resolve(__dirname, baseDirectory(file), 'index.html')
    const data      = pretty(`<!doctype html><head><meta charset='utf-8'><title>My Application</title></head><html><body>${scriptTagsFrom(bundle)}</body></html>`, { ocd: true })
    const encoding  = 'utf-8'

    writeFile(path, data, encoding, error => error && this.error(error))
  }
})