import fileToScript from './fileToScript'

// will ensure that all bundle scripts are translated to script tags
export default bundle => Object.keys(bundle).map(fileToScript).join('')