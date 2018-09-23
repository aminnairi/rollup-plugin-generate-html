export default function baseFile( file: string ): string {

  if ( typeof file !== 'string' ) {

    throw TypeError( `first argument expected to be of type string, ${ typeof file } provided` )

  }

  return file.replace( /^(\.\.\/|\.\/|\/)?(.*?\/)/, '' )

}