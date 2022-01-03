class contaBancaria{
    // Criando o método Construtor e passando suas propriedades
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }
    // Criando o get do Saldo
    get saldo() { 
        return this._saldo; 
    }
       // Criando o set do Saldo
    set saldo(valor) {
        this._saldo = valor;
    }
    //Criando o método de Sacar
    sacar(valor){
        if (valor > this._saldo){
            return 'Operação negada, saldo insuficiente';
        } 
        this._saldo = this._saldo - valor;

        return this._saldo;              
    }    
    //Criando o método de Sacar
    depositar(valor){
        this._saldo = this._saldo + valor;

        return this._saldo;
    }   
};

// HERANÇA - CRIANDO CONTA FILHA
class contaCorrente extends contaBancaria {
    constructor(agencia, numero, cartaoCredito){        
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaoCredito = cartaoCredito;
    }
    // Criando get e set do Cartão
    get cartaoCredito(){
        return this._cartaoCredito;
    }
    set cartaoCredito(valor){
        this._cartaoCredito = valor;
    }
}

// HERANÇA - CRIANDO CONTA FILHA
class contaPoupanca extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'poupança';
    }
}

// HERANÇA - CRIANDO CONTA FILHA
class contaUniversitaria extends contaBancaria{
    constructor(agencia, numero){
        super(agencia, numero);
        this.tipo = 'universitária';
    }
    //Criando metodo de limite de saque
    sacar(valor){
        if(valor > 500){
            return 'Operação negada! Você só pode sacar até R$500,00'
        }
        this._saldo = this._saldo - valor;
    }
}