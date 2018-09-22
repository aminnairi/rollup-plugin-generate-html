module.exports = {
  presets: [
    // transpile according to the current target environment
    [
      '@babel/preset-env',
      {
        modules: false,
        targets: {
          node: true
        }
      }
    ]
  ]
}