//Criar uma função que receba uma coleção de alunos e calcule a média de idade Adicione uma nova função no arquivo 
//calcula-media.js chamada calculaMediaIdadeAluno(alunos). A função deve receber um array da mesma classe dos alunos 
//criada na atividade 2.  
//Após isso a função deve iterar pelos alunos e calcular a média de idade e retornar ela.  Adicione essa função 
//para ser exportado pelo módulo. Adicione no final do programa da atividade 2 após informar o nome dos alunos com 
//maior idade também imprimir a média de idade dos alunos utilizando o método calculaMediaIdadeAluno(alunos)

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

    getIdade() {
        return this.idade
    }

}

const calcula_media = require('../12 - Classes-Construtores-Modulos/calcula-media')

var lista_alunos = []                   //inicializando a lista

var aluno1 = new Aluno("Paulo", 27)     //criando o objeto aluno 1 da lista 
var aluno2 = new Aluno("kamila", 17)    //criando o objeto aluno 2 da lista 
var aluno3 = new Aluno("Zefa", 70)      //criando o objeto aluno 3 da lista 

lista_alunos.push(aluno1)               //adicionando o objeto aluno 1 na sua lista alunos
lista_alunos.push(aluno2)               //adicionando o objeto aluno 2 na sua lista alunos
lista_alunos.push(aluno3)              //adicionando o objeto aluno 3 na sua lista alunos

// console.log(lista_alunos)

// for(i = 0; i < lista_alunos.length; i++){   //roda/itera a lista
//     var aluno = lista_alunos[i]             //posiçoes que roda na lista

//     if(aluno.ehMaior()){                    //o objeto aluno esta acessando o metodo ehMaior() da classe Aluno
//         console.log("O aluno " + aluno.nome + " eh maior de idade, pois tem " + aluno.idade + " anos")
//     } else {
//         console.log("O aluno " + aluno.nome + " não eh maior de idade, pois tem " + aluno.idade + " anos")
//     }
// }


var mediaIdadeAlunos = calcula_media.calculaMediaIdadeAluno(lista_alunos)
console.log("A media eh: " + mediaIdadeAlunos)
