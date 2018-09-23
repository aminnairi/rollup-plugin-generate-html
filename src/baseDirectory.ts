import { normalize } from 'path'

export default function( file: string = '' ): string {

  if ( typeof file !== 'string' ) {

    throw TypeError( `first argument expected to be of type string, ${ typeof file } provided` )

  }

  const firstLetterIndex = (/\w/i.exec( file ) || { index: 0 }).index

  const firstSeparatorIndex = file.indexOf( '/', firstLetterIndex )

  if ( firstSeparatorIndex === -1 ) {

    return normalize( file.slice( 0, firstLetterIndex ) )

  }

  return normalize( file.slice( 0, firstSeparatorIndex ) )

}