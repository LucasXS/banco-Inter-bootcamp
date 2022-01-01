// APPLY

const PESSOA = {
    name: 'Lucas',    
};

const ANIMAL = {
    name: "Godi",
};

function getSomeThing(){
    console.log(this.name);
}

//getSomeThing.apply(PESSOA);
//getSomeThing.apply(ANIMAL);

//

const MY_OBJETC = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.apply(MY_OBJETC, [1, 5]); // USA UM ARRAY