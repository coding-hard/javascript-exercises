
// function takes 2 arguments - word to repeat and number of times;
// variable i will be equal number of times, and will be decremented with each loop round
// while loop is used, when i = 0 it will stop, it will iterate exactly n amount of times
const repeatString = function(word, n) {
    let i = n;
    let result = '';

    if (n < 0) {
        return 'ERROR';
    }

    while (i > 0) {
        result += word;
        i--;
    }

    return result;
};

// Do not edit below this line
module.exports = repeatString;
