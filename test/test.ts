import { expect } from 'chai'
import baseDirectory from '../src/baseDirectory'

describe('baseDirectory', function(): void {

  it('should return the directory name', function(): void {

    expect(baseDirectory('dist/index.js')).to.be.equal('dist')

  })

  it('should return the directory name without the leading dot slash', function(): void {

    expect(baseDirectory('./dist/index.js')).to.be.equal('dist')

  })

  it('should return the directory name without the subdirectory', function(): void {

    expect(baseDirectory('./dist/js/index.js')).to.be.equal('dist')

  })

  it('should return the directory name with the trailing slash', function(): void {

    expect(baseDirectory('/dist/index.js')).to.be.equal('/dist')

  })

})