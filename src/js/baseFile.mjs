/**
 * @description Get the path to the file without the first directory (if it exists)
 * @param {string} file
 */
export default function baseFile(file) {

  return file.replace( /^(\.\.\/|\.\/|\/)?(.*?\/)/, '' )

}