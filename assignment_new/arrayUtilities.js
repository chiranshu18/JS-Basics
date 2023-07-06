const containsOnlyNumbers = (numbers) => {
    return array.every((element) => { return typeof element === 'number'; });
}

const doubleArray = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('wrong input type - not an array')
    }
    if (numbers.length == 0) {
        throw new Error('Array is empty')
    }
    if (containsOnlyNumbers) {
        throw new Error('wrong input type - not every element in array is number')
    }

    return numbers.map((num) => num * 2)
}

const removeOddNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('wrong input type - not an array')
    }
    if (numbers.length == 0) {
        throw new Error('Array is empty')
    }
    if (!containsOnlyNumbers) {
        throw new Error('wrong input type - not every element in array is number')
    }

    return numbers.filter((num) => num % 2 === 0)
}

const getEvenTripleNumbers = (numbers) => {
    if (!Array.isArray(numbers)) {
        throw new Error('wrong input type - not an array')
    }
    if (numbers.length == 0) {
        throw new Error('Array is empty')
    }
    if (!containsOnlyNumbers) {
        throw new Error('wrong input type - not every element in array is number')
    }

    return numbers.map((num) => num * 3).filter((num) => num % 2 == 0)
}

const getEvenTripleNumbers2 = (numbers) => numbers.reduce((acc,item) => {
    if ((item * 3) % 2 === 0) {
        acc.push(item * 3);
    }
    return acc
},[])

module.exports = { doubleArray, removeOddNumbers, getEvenTripleNumbers }

// console.log(doubleArray([1, 2, 3, 4, 'e']))
// console.log(removeOddNumbers([6, 7, 8, 9, 'n']))
// console.log(getEvenTripleNumbers([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))
// console.log(getEvenTripleNumbers2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]))