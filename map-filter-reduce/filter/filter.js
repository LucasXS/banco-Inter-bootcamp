function isPair(arr) {
    if(!arr || !arr.length) return false;

    var filterArr = arr.filter((item) => item % 2 == 0);
    
    return filterArr;
}  

//console.log(isPair([1, 2, 5, 6, 7, 8, 9, 10]));

//**FORMA DA PROFESSORA */
function filterPair(arr) {
    return arr.filter((callback));
}
function callback(item) {
    return item % 2 === 0;
}
const meuArray = [1, 2, 5, 6, 7, 8, 9, 10];
console.log(filterPair(meuArray));