import { existsSync, mkdirSync, writeFileSync } from 'fs'
import { join, resolve } from 'path'
import { baseDirectory } from './baseDirectory'
import { baseFile } from './baseFile'
import { isString } from './isString'

// @ts-ignore
import pretty from 'pretty'

interface IGeneratedBundleOptions {
  file: string
}

interface IGenerateHtmlOptions {
  charset?: string,
  id?: string,
  lang?: string,
  path?: string,
  publicPath?: string,
  title?: string
}

export const generateHtml: (options: IGenerateHtmlOptions) => object = ({ charset = 'utf-8', title = 'My Application', lang = 'en-US', path = '', publicPath = '', id }: IGenerateHtmlOptions = {}): object => {

  if (!isString(charset)) {
    throw TypeError(`first argument expected to be of type string, ${ typeof charset } provided`)
  }

  if (!isString(title)) {
    throw TypeError(`second argument expected to be of type string, ${ typeof title } provided`)
  }

  if (!isString(lang)) {
    throw TypeError(`third argument expected to be of type string, ${ typeof lang } provided`)
  }

  if (!isString(path)) {
    throw TypeError(`fourth argument expected to be of type string, ${ typeof path } provided`)
  }

  if (!isString(publicPath)) {
    throw TypeError(`fifth argument expected to be of type string, ${ typeof publicPath } provided`)
  }

  return {
    generateBundle({ file }: IGeneratedBundleOptions): void {

      if (!isString(file)) {

        throw TypeError(`fifth argument expected to be of type string, ${ typeof publicPath } provided`)

      }

      const outputDirectory: string = resolve(baseDirectory(file))
      const outputFile: string = resolve(outputDirectory, 'index.html')
      const data: string = pretty(`<!doctype html><html lang='${ lang }'><head><meta charset='${ charset }'><title>${ title }</title></head><body>${ id !== undefined ? `<div id='${ id }'></div>` : '' }<script src='${ join(publicPath, baseFile(file)) }'></script></body></html>`, { ocd: true }) as string

      if (!existsSync(outputDirectory)) {

        mkdirSync(resolve('dist'))

      }

      writeFileSync(outputFile, data, 'utf-8')

    },
  }
}
