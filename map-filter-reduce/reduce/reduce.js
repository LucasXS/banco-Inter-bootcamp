const arr = [1, 2, 3, 4, 5];
const sumArr = arr.reduce((sumArr, currentElement) => sumArr + currentElement);
//console.log(sumArr);

/*********************** */
function somaNumeros(arr) {
    return arr.reduce(function (sumNumbers, current) {
        console.log({sumNumbers,});
        console.log({current});
        return sumNumbers + current;
    }, 0);
}

const ARR = [1, 2, 4, 5];
console.log(somaNumeros(ARR));