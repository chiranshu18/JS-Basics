const sum = require('./sum')

it('should return 3 when executed', () => {
    expect(sum(10, 20)).toBe(30)
})