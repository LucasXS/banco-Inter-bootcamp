//
// THIS - É UMA REFERÊNCIA DE CONTEXTO//

// CONTEXTO                      REFERÊNCIA
// Em um objeto (método)         Proprio objeto dono do método
// Sozinha                       Objeto global (em navegadores, window)                           
// Função                        Objeto global
// Evento                        Elemento que recebeu o objeto

const PESSOA = {
    firstName: "Lucas",
    lastName : "Santos",
    id       : 1,
    fullName : function() {
        return this.firstName + " " + this.lastName;
    },
    getId: function(){
        return this.id;
    }
};

console.log(PESSOA.fullName());
console.log(PESSOA.getId());