# rollup-plugin-generate-html

Automatic HTML Generator

## 1. What does it do?

This plugin will write an `index.html` file containing all of your bundled scripts.

## 2. Installation

### 2.1 NPM

```shell
$ npm install @aminnairi/rollup-plugin-generate-html
```

### 2.2 Yarn

```shell
$ yarn add @aminnairi/rollup-plugin-generate-html
```

## 3. Usage

```javascript
// rollup.config.js
import { generateHtml } from '@aminnairi/rollup-plugin-generate-html'

export default {
  input: 'src/index.js',

  output: {
    file: 'dist/index.js',
    format: 'iife'
  },

  plugins: [
    generateHtml({
      /**
       * @description Charactet set used in the meta tag
       * @type {string}
       * @default 'utf-8'
       */
      charset: 'utf-8'
    })
  ]
}
```

## 4. Example output

```html
<!-- ./dist/index.html -->
<!doctype html>
<html>
  <head>
    <meta charset='utf-8'>
    <title>My Application</title>
  </head>
  <body>
    <script src='./index.js'></script>
  </body>
</html>
```