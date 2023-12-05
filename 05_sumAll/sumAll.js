const sumAll = function(num1, num2) {
    let finalSum = 0;
    let higherNumber = num1;
    let lowerNumber = num2;

    if (num1 < 0 || num2 < 0) {
        return 'ERROR'
    }
    
    if (typeof num1 != 'number' || typeof num2 != 'number' ) {
        return 'ERROR'
    }

    if (num2 > num1) {
        higherNumber = num2;
        lowerNumber = num1;
    }

    for (let i = lowerNumber; i <= higherNumber; i++) {
        finalSum += i;
    }

    return finalSum;
};

// console.log(sumAll(1,5));

// Do not edit below this line
module.exports = sumAll;
