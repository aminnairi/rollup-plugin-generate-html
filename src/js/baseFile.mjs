/**
 * @description Get the path to the file without the first directory (if it exists)
 * @param {string} file
 * @return {string}
 */
export default function baseFile(file) {

  return file.replace( /^(\.\.\/|\.\/|\/)?(.*?\/)/, '' )

}