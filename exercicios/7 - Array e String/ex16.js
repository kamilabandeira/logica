//Faça um algoritmo que verifica se uma string comece com a palavra google  Caso comece imprima que a palavra 
//é valida se não diga que não conhece o serviço. EX: entrada Google drive O algoritmo imprime      
//Palavra valida
//Utilize o método ​startsWith() 


const rs = require('readline-sync')


var frase = rs.question("Digite uma frase: ")   //pedi a frase
var lista_frase = frase.split(" ")              //dei um split para quebrar o espaco entre as palavras
console.log(lista_frase)                        //printando a lista


if(lista_frase.toString().toUpperCase().startsWith("GOOGLE")) {   //usei toString para trasformar o que era uma lista em string para ssim poder usar a função startsWith. usei o .toUpperCase() fala trasformar a string em maiuscula e assim ficar mais facil a comparação. 
    console.log("Palavra valida. ")                  //printa palavra valida
}else {                                              //se for diferente
    console.log("Não conhece o serviço. ")           //printa não conhece o serviço
}

