function myFunction(myArray, myNumber) {
    try{            
        // Reference Erros
        if(!myArray && !myNumber) throw new ReferenceError('Envie os parâmetros da função');
        // TypeError Object
        if(typeof myArray !== 'object') throw new TypeError('Array precisa ser do tipo Object');
        // TypeError Number
        if(typeof myNumber !== 'number') throw new TypeError('Num precisa ser do tipo Number');
        // RangeError
        if (myArray.length !== myNumber) throw new RangeError('Tamanho inválido!');
        
        return 'Deu tudo certo'

    }catch (e) {
        // se o erro for uma instancia de ReferenceError Faça
        if(e instanceof ReferenceError) {
            console.log('Este erro é um ReferenceError')
            console.log(e.message)
        } else if (e instanceof TypeError) {
            console.log('Este erro é um TypeError');
            console.log(e.message);
        } else if(e instanceof RangeError) {
            console.log('Este erro é um RangeError');
            console.log(e.message);
        } else {
            console.log('Tipo de erro não esperado', + e);
        }
    }
}

console.log(myFunction([1, 2, 3, 4, 5], 5));