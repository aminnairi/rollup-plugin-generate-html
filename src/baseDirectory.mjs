/**
 * @description Will grab the directory out of a full/relative path
 * @param {string} file
 * @return {string}
 */
export default function( file ) {

  const firstLetterIndex = /\w/i.exec( file ).index

  const firstSeparatorIndex = file.indexOf( '/', firstLetterIndex )

  if ( firstSeparatorIndex === -1 ) {

    return file.slice( 0, firstLetterIndex )

  }

  return file.slice( 0, firstSeparatorIndex )

}