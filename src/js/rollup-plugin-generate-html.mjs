import { resolve } from 'path'
import { writeFile } from 'fs'
import baseDirectory from './baseDirectory'
import scriptTagsFrom from './scriptTagsFrom'

const pretty = require('pretty')

/**
 * @description Inject a bundle into an automatically created HTML file
 * @param {object} configuration The configuration object
 * @param {string} [configuration.charset=utf-8] The character set used in the meta charset tag
 * @param {string} [configuration.title=My Application] The string used in the HTML title tag
 */
export const generateHtml = ({ charset = 'utf-8', title = 'My Application' } = {}) => ({
  generateBundle({ file }, bundle) {
    const path      = resolve(baseDirectory(file), 'index.html')
    const data      = pretty(`<!doctype html><head><meta charset='${ charset }'><title>${ title }</title></head><html><body>${ scriptTagsFrom(bundle) }</body></html>`, { ocd: true })
    const encoding  = 'utf-8'

    writeFile(path, data, encoding, error => error && this.error(error))
  }
})