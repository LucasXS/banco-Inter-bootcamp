const orange = {
	price: 2,
};

const apple = {
	price: 4,
};

/*
function mapArray() {
	const array = [1, 2, 3, 4, 5];
	return array.map(function (item) {
		return item * this.price;
	}, apple);
}*/

//console.log(mapArray());

// Outro forma
function mapComThis(arrx, thisArg) {    
    return arrx.map(function (item) {
        return item * this.price;
    }, thisArg);
}

num = [1,2];
console.log('this -> apple: ', mapComThis(num, apple));
console.log('this -> orange: ', mapComThis(num, orange));