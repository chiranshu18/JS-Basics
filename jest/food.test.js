const foodPref = require('./food')

it('should return an object when executed', ()=>{
    expect(foodPref()).toBe({'pizza':'like', 'burger': 'dislike'})
})

it('should return an object when executed', ()=>{
    expect(foodPref()).toEqual({'pizza':'like', 'burger': 'dislike'})
})