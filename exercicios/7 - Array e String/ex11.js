//Faça um programa que receba uma palavra e verifica se a palavra está cometendo o seguinte erro de português 
//Antes de “p” ou “b” devemos usar M Caso a palavra esteja errada informar o erro Se não dizer que a palavra 
//está certa.  Utilize o método ​includes() 


const rs = require('readline-sync')

var palavra = rs.question("Digite uma palavra: ")

if(palavra.includes("mp") || palavra.includes("mb")){      //usei assim pq a funçao includes me retorna verdadeiro ou falso e o if sempre procura condiçoes verdadeiras
    console.log(palavra)
}else{
    console.log("Palavra escrita de forma incorreta. ")  //se não for verdade ele imprime não incorreto
}