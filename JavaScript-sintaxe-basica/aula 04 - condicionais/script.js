/*var jogador1 = 2;
var jogador2 = 0;
var placar;

// if ternário
jogador1 != -1 && jogador2 != -1 ? console.log('Os jogadores são validos'): console.log('jogadores inválidos')

// usando if
if(jogador1 > 0 && jogador2 == 0) {
    console.log('Jogador 1 marcou ponto!');
    placar = jogador1 > jogador2;
}
// usando else if
else if (jogador2 > 0 && jogador1 == 0) {
    console.log('Jogador 2 marcou ponto!');
    placar = jogador2 > jogador1;
}
// usando else
else {
    console.log('Ninguém marcou ponto!');
}

switch(placar) {
    case placar = jogador1 > jogador2:
        console.log('Jogador 1 ganhoooou!!');
        break;
    case placar = jogador2 > jogador1:
        console.log('Jogador 2 ganhoooou!!');
        break
    default:
        console.log('Sem ganhadores');     
}*/
//*****************************************************//
// REPETIÇÕES COM FOR //////////////////////////////////
//***************************************************//

/*let array = ['valor1', 'valor2', 'valor3', 'valor4', 'valor5'];
let object = {propriedade1: 'valor1', propriedade2: 'valor2', propriedade3: 'valor3'};

// for - executa uma condição até que ela seja falta
for (let indice = 0; indice < array.length; indice++){
    console.log('NÚMERO: ',indice) //(retorna número)
    console.log(typeof(indice))
}

// for in - executa uma repetição a partir de uma propriedade 
for (let i in array){
    console.log('STRING: ', i)    
}

// IN OBJECT
for (i in object){
    console.log(i)
}

// for of - executa repetição a partir de valor3
for (i of array) {
    console.log(i)
}

//com objetc - não dá para usar o for of com objetos
for (i of object.propriedade1) {
    console.log(i)
}*/

// WHILE - DO WHILE

var a = 0;

while (a < 10) {
    a++;
    console.log(a)
}

do {
    a++;
    console.log(a);
} while (a < 10)