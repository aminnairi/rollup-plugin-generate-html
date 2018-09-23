export default function baseFile(file: string): string {

  return file.replace( /^(\.\.\/|\.\/|\/)?(.*?\/)/, '' )

}