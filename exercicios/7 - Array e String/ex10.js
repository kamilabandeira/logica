//Faça um programa que receba uma palavra e verifica se ela termina com “al” se termina com “al” então imprime 
//a palavra se não imprime “palavra não identificada”. Utilize o método ​endsWith() 


const rs = require('readline-sync')

var palavra = rs.question("Digite uma palavra: ")

if(palavra.endsWith("al")){                  //usei assim pq a funçao endWith me retorna verdadeiro ou falso e o if sempre procura consiçoes verdadeiras
    console.log(palavra)
}else{
    console.log("Palavra não identificada. ")  //se não for verdade ele imprime não idetificada 
}



