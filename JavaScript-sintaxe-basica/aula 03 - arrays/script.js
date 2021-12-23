/*
MANIPULANDO ARRAYS
forEach() - itera um array
push() - add item no final do array
pop() - remove item no final do array
shift() - remove item no inicio do array
unshift() - add item no inicio do array
indexOf() - retorna o inicio de uma valor
splice() - remove ou substitue um item pelo indices do array
slice() - retorna uma parte de um array existente 
*/

/*
let array = ['lucas', 22, true, ['array1'], ['array2'], ['array3']];

// forEach
array.forEach(function(item, index) {console.log(item, index)});

//push
array.push('Maria');
console.log(array)

//pop
array.pop();
console.log(array)

//shift
array.shift();
console.log(array)

//unshift
array.unshift('Ed');
console.log(array)

//indexOf
console.log(array.indexOf(true))

//splice
array.splice(0, 3)
console.log(array)

//slice
let novoArray = array.slice(0, 3);
console.log(novoArray)*/

let object = {string: 'string', number: 1, boolean: true, array: ["array"], objectInterno: {objectInterno: 'objeto interno'}}

/*/ desestruturação
// forma 1
console.log(object.objectInterno);

var novoArray = object.array;
console.log(novoArray);*/

// forma 2

var {string, boolean, objectInterno} = object;
console.log(string, boolean, objectInterno)