import { join, resolve } from 'path'
import { writeFile } from 'fs'
import baseDirectory from './baseDirectory'
//import scriptTagsFrom from './scriptTagsFrom'

function baseFile(file) {
  return file.replace( /^(\.\.\/|\.\/|\/)?(.*?\/)/, '' )
}

const pretty = require('pretty')

/**
 * @description Inject a bundle into an automatically created HTML file
 * @param {object} [configuration] The configuration object
 * @param {string} [configuration.charset=utf-8] The character set used in the meta charset tag
 * @param {string} [configuration.title=My Application] The string used in the HTML title tag
 * @param {string} [configuration.lang=en-US] The string used in the lang attribute of the html tag
 * @param {string} [configuration.path] The destination where to put the HTML file
 * @param {string} [configuration.publicPath=./] The string added before the script url
 */
export const generateHtml = ({ charset = 'utf-8', title = 'My Application', lang = 'en-US', path, publicPath = './' } = {}) => ({
  generateBundle({ file }) {
    const output    = resolve(path || baseDirectory(file), 'index.html')
    const data      = pretty(`<!doctype html><html lang='${ lang }'><head><meta charset='${ charset }'><title>${ title }</title></head><body><script src='${ join( publicPath, baseFile( file ) ) }'></script></body></html>`, { ocd: true })
    const encoding  = 'utf-8'

    writeFile(output, data, encoding, error => error && this.error(error))
  }
})