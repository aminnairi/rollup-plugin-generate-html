import { join, resolve }  from 'path'
import { writeFile }      from 'fs'
import baseDirectory      from './baseDirectory'
import baseFile           from './baseFile'

interface GeneratedBundleOptions {
  file: string
}

interface GenerateHtmlOptions {
  charset?     : string,
  title?       : string,
  lang?        : string,
  path?        : string,
  publicPath?  : string
}

export function generateHtml({ charset = 'utf-8', title = 'My Application', lang = 'en-US', path = '', publicPath = '' }: GenerateHtmlOptions = {}): Object {
  return {
    generateBundle({ file }: GeneratedBundleOptions): void {
      const output    = resolve(path || baseDirectory(file), 'index.html')
      const data      = require('pretty')(`<!doctype html><html lang='${ lang }'><head><meta charset='${ charset }'><title>${ title }</title></head><body><script src='${ join( publicPath, baseFile( file ) ) }'></script></body></html>`, { ocd: true })
      const encoding  = 'utf-8'

      // @ts-ignore
      writeFile(output, data, encoding, error => error && this.error(error))
    }
  }
}
