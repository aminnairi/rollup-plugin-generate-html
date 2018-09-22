# rollup-plugin-generate-html

Automatic HTML Generator

## Summary

* [1. What does it do?](#1-what-does-it-do)
* [2. Installation](#2-installation)
  * [2.1 NPM](#21-npm)
  * [2.2 Yarn](#22-yarn)
* [3. Usage](#3-usage)
* [4. Example output](#4-example-output)
* [5. API](#5-api)


## 1. What does it do?

This plugin will write an `index.html` file containing all of your bundled scripts.

[Back to summary.](#summary)

## 2. Installation

### 2.1 NPM

```shell
$ npm install @aminnairi/rollup-plugin-generate-html
```

[Back to summary.](#summary)

### 2.2 Yarn

```shell
$ yarn add @aminnairi/rollup-plugin-generate-html
```

[Back to summary.](#summary)

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
    generateHtml()
  ]
}
```

[Back to summary.](#summary)

## 4. Example output

```html
<!-- ./dist/index.html -->
<!doctype html>
<html lang='en-US'>
  <head>
    <meta charset='utf-8'>
    <title>My Application</title>
  </head>
  <body>
    <script src='index.js'></script>
  </body>
</html>
```

[Back to summary.](#summary)

## 5. API

```javascript
/**
 * @description Inject a bundle into an automatically created HTML file
 * @param {object} [configuration] The configuration object
 * @param {string} [configuration.charset=utf-8] The character set used in the meta charset tag
 * @param {string} [configuration.title=My Application] The string used in the HTML title tag
 * @param {string} [configuration.lang=en-US] The string used in the lang attribute of the html tag
 * @param {string} [configuration.path] The destination where to put the HTML file (default to rollup.output.file base directory)
 * @param {string} [configuration.publicPath=] The string added before the script url
 */
generateHtml({
  charset: 'ISO-8859-1',
  title: 'My Awesome Application',
  lang: 'fr-FR',
  path: '../docs',
  publicPath: '/home/'
})
```

[Back to summary.](#summary)
