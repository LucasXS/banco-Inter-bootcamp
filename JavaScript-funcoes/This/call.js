const PESSOA = {
    name: 'Lucas',    
};

const ANIMAL = {
    name: "Morphy",
};

function getSomeThing(){
    console.log(this.name);
}

//getSomeThing.call(PESSOA);
//getSomeThing.call(ANIMAL);

//

const MY_OBJETC = {
    num1: 2,
    num2: 4,
};

function soma(a, b) {
    console.log(this.num1 + this.num2 + a + b);
}

soma.call(MY_OBJETC, 1, 5);