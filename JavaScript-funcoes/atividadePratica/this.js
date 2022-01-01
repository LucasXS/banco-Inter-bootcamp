function calculateAge(years) {
    return `Daqui a ${years} anos, ${this.name} terá ${
        this.age + years} anos de idade`;
}

const PEOPLE1 = {
    name: 'Lucas',
    age: 25,   
};

const PEOPLE2 = {
    name: 'Maria',
    age: 35,   
};

const ANIMAL = {
    name: 'Brutus',
    age: 5,
    breed: 'Pug'
};

// CALL
console.log(calculateAge.call(ANIMAL, 30));

// APPLY
console.log(calculateAge.apply(PEOPLE1, [30]));