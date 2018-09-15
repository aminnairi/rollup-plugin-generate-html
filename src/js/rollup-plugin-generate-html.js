import path from 'path'
import fs from 'fs'

const pretty = require('pretty')

// will grab the directory out of a full/relative path
const baseDirectory   = file => file.slice(0, file.lastIndexOf('/'))

// will transform a file path to it's script tag representation
const fileToScript    = file => `<script src='./${file}'></script>`

// will ensure that all bundle scripts are translated to script tags
const scriptTagsFrom  = bundle => Object.keys(bundle).map(fileToScript).join('')

export const generateHtml = () => ({
  generateBundle({ file }, bundle) {
    const outputPath = path.resolve(baseDirectory(file), 'index.html')
    console.log(outputPath)
    // const outputPath      = path.resolve(__dirname, baseDirectory(file), 'index.html')
    // const data      = pretty(`<!doctype html><head><meta charset='utf-8'><title>My Application</title></head><html><body>${scriptTagsFrom(bundle)}</body></html>`, { ocd: true })
    // const encoding  = 'utf-8'

    console.log('test 4')
  }
})