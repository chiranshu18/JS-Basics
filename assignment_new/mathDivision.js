const getDivision = (number1, number2) => {
    if(number2 == 0){
        throw new Error('Division by 0 not allowed')
    }
    try{
        return number1/number2
    }

}

console.log(getDivision(5, 0))