import fileToScript from './fileToScript'

/**
 * @description will ensure that all bundle scripts are translated to script tags
 * @param {Object} bundle
 * @param {string} publicPath
 * @return {string}
 */
export default function( bundle, publicPath ) {

  return Object.keys( bundle ).map( fileToScript( publicPath ) ).join( '' )

}