import { normalize } from 'path'
import { isString } from './isString'

type baseDirectory = (file?: string) => string

export const baseDirectory: baseDirectory = (file: string = ''): string => {

  if (!isString(file)) {

    throw TypeError(`first argument expected to be of type string, ${ typeof file } provided`)

  }

  const firstLetter: (RegExpExecArray | null) = /\w/i.exec(file)

  const hasLetter: boolean = firstLetter !== null

  const firstLetterIndex: number = hasLetter ? firstLetter.index : 0

  const firstSeparatorIndex: number = file.indexOf('/', firstLetterIndex)

  if (firstSeparatorIndex === -1) {

    return normalize(file.slice(0, firstLetterIndex))

  }

  return normalize(file.slice(0, firstSeparatorIndex))

}
