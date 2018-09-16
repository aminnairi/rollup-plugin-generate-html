/**
 * @description Will grab the directory out of a full/relative path
 * @param {string} file
 * @return {string}
 */
export default function( file ) {

  return file.slice( 0, file.lastIndexOf( '/' ) )

}