/*function comparaNumeros(num1, num2) {
    const SAOIGUAIS = num1 === num2;
    const SOMA = num1 + num2;

    // if ternário
    return SAOIGUAIS ? "São iguais" : "Não são iguais"
}*/

function comparaNumeros(num1, num2) {
    if (!num1 || !num2) return "Defina dois números!"
    const PRIMEIRA_FRASE = criaPrimeiraFrase(num1, num2);
    const SEGUNDA_FRASE =  criaSegundaFrase(num1, num2);  
    
    return `${PRIMEIRA_FRASE} ${SEGUNDA_FRASE}`;
}

function criaPrimeiraFrase(num1, num2) {
    let saoiguais = '';

    if (num1 !== num2){
        saoiguais = 'Não';
    }

    return `Os números ${num1} e ${num2} ${saoiguais} são iguais.`;
}

function criaSegundaFrase(num1, num2) {
    const SOMA = num1 + num2;
    
    let resultado10 = "menor";
    let resultado20 = "menor";
    const COMPARA10 = SOMA > 10;
    const COMPARA20 = SOMA > 20;

    if (COMPARA10) {
        resultado10 = "maior";
    }

    if (COMPARA20) {
        resultado20 = "maior";
    }

    return `Sua soma é ${SOMA}, que o ${resultado10} que 10 e o ${resultado20} que 20`;
}

console.log(comparaNumeros(0, 1));