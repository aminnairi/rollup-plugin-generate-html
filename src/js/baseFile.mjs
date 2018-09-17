export default function baseFile(file) {
  return file.replace( /^(\.\.\/|\.\/|\/)?(.*?\/)/, '' )
}