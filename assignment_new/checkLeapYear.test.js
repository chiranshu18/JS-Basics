const checkLeapYear = require('./checkLeapYear')

describe('check if a year is a leap year', () => {
    it('should return true when 2020 is given as input', () => {
        expect(checkLeapYear(2020)).toBe(true)
    })
})