import babel from 'rollup-plugin-babel'
import uglify from 'rollup-plugin-uglify-es'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'

export default {
  input: './js/rollup-plugin-generate-html.js',
  output: [
    {
      format: 'es',
      file: '../dist/rollup-plugin-generate-html.esm.js'
    },
    {
      format: 'cjs',
      file: '../dist/rollup-plugin-generate-html.common.js'
    }
  ],
  external: [
    'fs',
    'path'
  ],
  plugins: [
    resolve(),
    commonjs(),
    babel(),
    uglify()
  ]
}