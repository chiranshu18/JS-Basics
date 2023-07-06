const {doubleArray, removeOddNumbers, getEvenTripleNumbers} = require('./arrayUtilities')

describe('array utilities', () => {
    it('should throw an error when input is not an array', ()=>{
        expect(()=>doubleArray('qwerty')).toThrow('wrong input type - not an array')
    })

    it('should throw an error when no elemnts in array', ()=>{
        expect(()=>doubleArray([])).toThrow('Array is empty')
    })

    it('should throw an error when mixed type of elements in input array', ()=>{
        expect(()=>doubleArray('[]')).toThrow('wrong input type - not every element in array is number')
    })
})