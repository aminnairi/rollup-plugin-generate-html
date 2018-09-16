/**
 * @description Higher order function that will transforme a file to a HTML script tag with a given public path
 * @param {string} publicPath
 * @return {callback}
 */
export default function( publicPath ) {

  /**
   * @callback callback
   * @description Callback that effectively transforms the file to its HTML script tag representation
   * @param {string} file
   * @return {string}
   */
  return function( file ) {

    return `<script src='${ publicPath }${ file }'></script>`

  }

}