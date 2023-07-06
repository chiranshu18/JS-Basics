const checkStringEnd = require('./checkStringEnd')

describe('to match last 6 chars of string', () => {
    it('should return true when javaScript is given as an input', () => {
        expect(checkStringEnd('javaScript')).toBe(true)
    })
})