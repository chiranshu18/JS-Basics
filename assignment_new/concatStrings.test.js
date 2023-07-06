const concatStrings = require('./concatStrings')

it('should return concatinated strings leaving first character', ()=>{
    expect(concatStrings('code', 'academy')).toBe('odecademy')
})