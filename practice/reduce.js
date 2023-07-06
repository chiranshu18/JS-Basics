let arr1 = [1,2,3,4,5,6,7,8,9,10]
let arr2 = arr1.reduce((acc, curr) => {
    return acc + curr
})

console.log(arr2)