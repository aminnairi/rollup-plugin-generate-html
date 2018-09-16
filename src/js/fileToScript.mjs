// will transform a file path to it's script tag representation
export default publicPath => file => `<script src='${ publicPath }${ file }'></script>`