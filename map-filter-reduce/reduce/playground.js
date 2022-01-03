const lista = [
    {
        nome: 'saba em po',
        preco: 30,
    },
    {
        nome: 'cereal',
        preco: 12,
    },
    {
        nome: 'toalha',
        preco: 30,
    },
];

saldoDisponivel= 100;

function calculaSaldo(saldoDisponivel, lista){
    return lista.reduce(function(prev, current, index){
        console.log('rodada', index+1);
        console.log([prev]);
        console.log([current.preco]);
        return prev - current.preco;
    }, saldoDisponivel);
}

console.log(calculaSaldo(saldoDisponivel, lista));