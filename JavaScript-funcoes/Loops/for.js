//
// FOR - LOOP DENTRO DE ELEMENTOS ITERÁVEIS (ARRAYS, STRING) //
//

function multiplicaPorDois(arr){
    let multiplicados = [];

    for(let i = 0; i < arr.length; i++){
        multiplicados.push(arr[i] * 2);
    }

    return multiplicados;
}

const MEUS_NUMEROS = [2, 33, 456, 356, 40];
//console.log(multiplicaPorDois(MEUS_NUMEROS));

//
// FOR IN - LOOP ENTRE PROPRIEDADES ENUMERAVEIS DE UM OBJETO.//
//

// RETORNA AS PROPRIEDADES
function forInExemplo(objeto){
    for(propriedade in objeto){
        console.log(propriedade);
    }
}

const MEU_OBJETO = {
    name: 'João',
    age: '20',
    city: 'São Paulo'
};

//forInExemplo(MEU_OBJETO);

// RETORNA OS VALORES DAS PROPRIEDADES
function forInExemplo2(objeto){
    for(propriedade in objeto){
        console.log(objeto[propriedade]);
    }
}

const MEU_OBJETO2 = {
    name: 'João',
    age: '20',
    city: 'São Paulo'
};

//forInExemplo2(MEU_OBJETO2);

//
// FOR OF - LOOP ENTRE ESTRUTURAS ITERÁVEIS(ARRAYS E STRINGS)//
//

function logLetras(palavra){
    for(letra of palavra){
        console.log(letra);
    }
}

const PALAVRA = "abacaxi";
//logLetras(PALAVRA);

//

function logNumeros(nums){
    for(num of nums){
        console.log(num);
    }
}

const NUMS = [30, 20, 233, 2];
//logNumeros(NUMS);