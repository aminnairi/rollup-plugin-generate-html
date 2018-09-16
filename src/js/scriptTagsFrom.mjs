import fileToScript from './fileToScript'

// will ensure that all bundle scripts are translated to script tags
export default (bundle, publicPath) => Object.keys(bundle).map(fileToScript(publicPath)).join('')