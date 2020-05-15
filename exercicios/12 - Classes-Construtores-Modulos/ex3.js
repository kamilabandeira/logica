//Criar um módulo que calcule a média de uma coleção de números.  Para isso crie um arquivo chamado calcula-media.js.  
//No módulo exporte uma função media(arr) que recebe como argumento um array de números.  A função deve iterar 
//por esses números e retornar sua média.  Após isso no arquivo da atividade importe o módulo criado e solicite 
//ao usuário 3 números, utilize o módulo criado para calcular a média e no final imprima o resultado para o usuário. 

const calcula_media = require("../12 - Classes-Construtores-Modulos/calcula-media")
const rs = require("readline-sync")                               //importando minha biblioteca readline-sync

var lista_numeros = []                                              //crianado minha lista 


for (var i = 1; i <= 3; i++) {                                           //criando meu for para ter uma condição de parada
    var numero_entrada = rs.questionFloat("Digite o " + i + "o numero: ")    //inserindo numero 
    lista_numeros.push(numero_entrada)                                       //incluindo nota de entrada na lista de notas 
}

var mediaCalculada = calcula_media.calcMediaApelido(lista_numeros)

console.log(mediaCalculada)


