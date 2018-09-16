/**
 * @description Will grab the directory out of a full/relative path
 * @param {string} file
 * @return {string}
 */
export default function( file ) {

  /** @var {string} withoutDotSlash */
  const withoutDotSlash = file.replace( /^(\.\/|\/)/, '' )

  /** @var {number} directorySeparatorIndex */
  const directorySeparatorIndex = withoutDotSlash.indexOf( '/' )

  if ( directorySeparatorIndex !== -1 ) {

    return withoutDotSlash.slice( 0, directorySeparatorIndex )

  }

  return ''

}