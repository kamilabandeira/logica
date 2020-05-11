//Faça um programa que receba uma frase e troque a palavra ANTILOPE por um de seus nomes cientificos : 
//Kobus ellipsiprymnus 
 //Utilize o método ​replace() 


 const rs = require('readline-sync')

 var frase = "Os animais antilopes. "

 var palavra = frase.replace("antilopes" , "Kobus ellipsiprymnus")  //o primeiro parametro e a palavra que ele procura 
                                                                    //e o segundo e a palavrq que ele coloca no lugar
 console.log(palavra)