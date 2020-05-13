//Crie um algoritmo que cadastre 3 alunos e diga qual possui a maior idade, se mais de um possuir maior idade 
//apresentar o nome de todos os que possuem maior idade. Para isso crie uma classe Aluno que receba duas variáveis 
//no construtor nome e idade e inicialize essas variáveis nas propriedades do objeto. Após isso peça para o usuário 
//cadastrar o primeiro aluno e solicite nome e idade.  Crie o objeto do aluno e adicione em um array. 
//Repita esse passo para os outros alunos.  Ao final o algoritmo deve iterar pelo array de alunos  e descobrir 
//quais são os alunos com maior idade e imprimir seus nomes. 
 

class Aluno {                                       //nomeando minha classe
    constructor(nome_parametro, idade_paramentro){  //especificando o construtor da minha classe
        this.nome = nome_parametro                  //colocoando o nome_parametro no atributo nome
        this.idade = idade_paramentro               ////colocoando o idade_parametro no atributo idade
    }

    ehMaior() {                                    //nomeando meu metodo/funçao ehMaior que não recebe parametros
        if(this.idade >= 18) {                     //acessando o atributo idade do meu objeto que esta chamando o meu metodo ehMaior
            return true
        } else {
            return false
        }       
    }
}

// var rs = require('readline-sync');

// var nome_entrada = rs.question("DIgite o nome do aluno 1: ")
// var idade_entrada = rs.questionInt("DIgite a idade do aluno 1: ")

var lista_alunos = []                   //inicializando a lista

var aluno1 = new Aluno("Paulo", 27)     //criando o objeto aluno 1 da lista 

var aluno2 = new Aluno("kamila", 17)    //criando o objeto aluno 2 da lista 

var aluno3 = new Aluno("Zefa", 70)      //criando o objeto aluno 3 da lista 


lista_alunos.push(aluno1)               //adicionando o objeto aluno 1 na sua lista alunos
lista_alunos.push(aluno2)               //adicionando o objeto aluno 2 na sua lista alunos
lista_alunos.push(aluno3)              //adicionando o objeto aluno 3 na sua lista alunos

// var lista_alunos = [aluno1, aluno2, aluno3]
// console.log(lista_alunos)


// for(i = 0; i < lista_alunos.length; i++){   //roda/itera a lista
//     var aluno = lista_alunos[i]             //posiçoes que roda na lista

//     if(aluno.ehMaior()){                    //o objeto aluno esta acessando o metodo ehMaior() da classe Aluno
//         console.log("O aluno " + aluno.nome + " eh maior de idade, pois tem " + aluno.idade + " anos")
//     } else {
//         console.log("O aluno " + aluno.nome + " não eh maior de idade, pois tem " + aluno.idade + " anos")
//     }
// }


lista_alunos.forEach(aluno =>{
    
    if(aluno.ehMaior()){                    //o objeto aluno esta acessando o metodo ehMaior() da classe Aluno
        console.log("O aluno " + aluno.nome + " eh maior de idade, pois tem " + aluno.idade + " anos")
    } else {
        console.log("O aluno " + aluno.nome + " não eh maior de idade, pois tem " + aluno.idade + " anos")
    }
})

