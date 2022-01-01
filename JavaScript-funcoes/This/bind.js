// BIND - Clona a estrutura da função onde é chamada e aplica o valor do objetoo passado como parâmetro.

const RETORNA_NOMES = function () {
    return this.name;
}

let cloneLucas = RETORNA_NOMES.bind({ name: 'Lucasssssssssss'});

console.log(cloneLucas());