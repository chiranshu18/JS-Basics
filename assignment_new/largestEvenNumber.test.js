const {largestEven, largestEven2} = require('./largestEvenNumber')

describe('find largest even number in array', ()=>{
    it('shoud return largest even number when num array is input', ()=>{
        expect(largestEven([56, 78, 45, 34])).toEqual(78)
    })
})

describe('find largest even number in array using arrow function', ()=>{
    it('shoud return largest even number when num array is input', ()=>{
        expect(largestEven2([34, 78, 45, 56])).toEqual(78)
    })
})