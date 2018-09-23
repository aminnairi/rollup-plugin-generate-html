import { join, resolve }  from 'path'
import { writeFileSync, existsSync, mkdirSync }      from 'fs'
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

  if ( typeof charset !== 'string' ) {

    throw TypeError( `first argument expected to be of type string, ${ typeof charset } provided` )

  }

  if ( typeof title !== 'string' ) {

    throw TypeError( `second argument expected to be of type string, ${ typeof title } provided` )

  }

  if ( typeof lang !== 'string' ) {

    throw TypeError( `third argument expected to be of type string, ${ typeof lang } provided` )

  }

  if ( typeof path !== 'string' ) {

    throw TypeError( `fourth argument expected to be of type string, ${ typeof path } provided` )

  }

  if ( typeof publicPath !== 'string' ) {

    throw TypeError( `fifth argument expected to be of type string, ${ typeof publicPath } provided` )

  }

  return {
    generateBundle({ file }: GeneratedBundleOptions): void {

      if ( typeof file !== 'string' ) {

        throw TypeError( `fifth argument expected to be of type string, ${ typeof publicPath } provided` )

      }

      const output    = resolve(path || baseDirectory( file ), 'index.html')
      const data      = require('pretty')(`<!doctype html><html lang='${ lang }'><head><meta charset='${ charset }'><title>${ title }</title></head><body><script src='${ join( publicPath, baseFile( file ) ) }'></script></body></html>`, { ocd: true })
      const encoding  = 'utf-8'

      const outputDirectory = resolve( baseDirectory( output ) )

      mkdirSync( resolve( 'dist' ) )

      // @ts-ignore
      writeFileSync(output, data, encoding)

    }
  }
}
