import babel    from 'rollup-plugin-babel'
import uglify   from 'rollup-plugin-uglify-es'
import resolve  from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import clean    from 'rollup-plugin-cleaner'
import license  from 'rollup-plugin-license'
import typescript from 'rollup-plugin-typescript2'

export default {
  // file to be bundled
  input: 'src/rollup-plugin-generate-html.ts',

  output: [
    // generating a JavaScript module to be used with the ES Module syntax
    { format: 'es', file: 'dist/rollup-plugin-generate-html.mjs' },

    // generating a classic module to be used with CommonJS's Node syntax
    { format: 'cjs', file: 'dist/rollup-plugin-generate-html.js' }
  ],

  // modules that does not need to be bundled inside the final output
  external: [ 'fs', 'path' ],

  plugins: [
    // remove the target directory before generating a new bundle
    clean({ targets: [ 'dist' ] }),

    // helps resolve CommonJS's modules dependencies to be bundled into the final output
    commonjs(),

    // helps resolve ES Module's modules dependencies to be bundled into the final output
    resolve(),

    // transpile typescript compliant files into javascript
    typescript({ typescript: require('typescript') }),

    // will use the babel.config.js to transpile the input
    babel(),

    // will minify the output bundle
    uglify(),

    // licensing the bundles
    license({ banner: 'Copyright (c) 2018 Amin NAIRI' })
  ]
}
