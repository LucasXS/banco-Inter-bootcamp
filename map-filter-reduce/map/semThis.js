//******************************************************************//
// MAP - MINHA FORMA
const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(function(element){
    return element * 3;
});
//console.log(newArr);


//******************************************************************//
// COMO A TEACHER FAZER
const array = [2, 3, 4, 5];
//console.log(array.map((item) => item * 2));


//******************************************************************//
function mapSemThis(array){
    return array.map(function(item){
        return item * 2;
    });
}

const nums = [2, 3, 4, 25];

console.log(mapSemThis(nums));