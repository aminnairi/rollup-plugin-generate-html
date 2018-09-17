function baseFile(file) {
  return file.replace( /^(\.\.\/|\.\/|\/)?(.*?\/)/, '' )
}
