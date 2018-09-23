export default function( file: string = '' ): string {

  const firstLetterIndex = (/\w/i.exec( file ) || { index: 0 }).index

  const firstSeparatorIndex = file.indexOf( '/', firstLetterIndex )

  if ( firstSeparatorIndex === -1 ) {

    return file.slice( 0, firstLetterIndex )

  }

  return file.slice( 0, firstSeparatorIndex )

}