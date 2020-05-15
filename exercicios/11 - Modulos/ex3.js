//Faça um algoritmo que receba um número e diga se ele é par ou ímpar Utilize o pacote :  
//​https://www.npmjs.com/package/is-odd 
 

// npm install --save is-odd

const isOdd = require('is-odd')                          //importando minha biblioteca is-odd
const rs = require("readline-sync")                      //importando minha biblioteca rs

function verificaParImpar(){                             //criando uma função para verificar se e impar ou par
    var numero = rs.questionInt("Digite um numero: ")

    if(isOdd(numero)){                                   //criando meu for para condição de true se par
        console.log("O " + numero + " eh impar ")        //printando true
       return "O " + numero + " eh impar "               //criei um return para poder retonar no ex6
    }else {
        console.log("O " + numero + " eh par ")          //printando false
        return "O " + numero + " eh par "                //criei um return para poder retonar no ex6
    } 
}


module.exports = {
    verificaParImpar: verificaParImpar                   //exportanado minha função para verificar se e impar ou par e exportar para o exercicio ex6
}
