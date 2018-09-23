import { expect } from 'chai'

import baseDirectory from '../src/baseDirectory'
import baseFile from '../src/baseFile'

describe('rollup-plugin-generate-html', function(): void {

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

  describe('baseFile', function(): void {

    it('should return the file name when passing a there is a directory in the path', function(): void {

      expect(baseFile('dist/index.js')).to.be.equal('index.js')

    })

    it('should return the file name when passing a there is a dot-slash in the path to the directory', function(): void {

      expect(baseFile('./dist/index.js')).to.be.equal('index.js')

    })

    it('should return the file name when passing a there is a slash in the path to the directory', function(): void {

      expect(baseFile('/dist/index.js')).to.be.equal('index.js')

    })

    it('should return the file name with its subdirectory when passing a there is a directory in the path', function(): void {

      expect(baseFile('dist/js/index.js')).to.be.equal('js/index.js')

    })

    it('should return the file name with its subdirectory when passing a there is a dot-slash in the path to the directory', function(): void {

      expect(baseFile('./dist/js/index.js')).to.be.equal('js/index.js')

    })

    it('should return the file name with its subdirectory when passing a there is a slash in the path to the directory', function(): void {

      expect(baseFile('/dist/js/index.js')).to.be.equal('js/index.js')

    })

  })

})