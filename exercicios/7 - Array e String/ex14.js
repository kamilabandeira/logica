//Faça um programa que receba uma string, o programa vai estar esperando uma data no formato dd/MM/yyyy onde : 
//a. dd -> dia 
//b. mm  -> mês 
//c. yyyy -> ano 
//Utilize o método ​match()​ para fazer essa validação, você deverá utilizar um expressão regular para resolver 
//este problema. Caso a data esteja valida o algoritmo deve imprimir :  Entrada -> 22/05/2020 
//O algoritmo imprime :  Dia : 22 Mes : 05 Ano : 2020 

// dia ^\d{2}
// mes \/\d{2}\/
// ano \d{4}

var data = "22/05/2020"
// /regex/ -> a barra inicial e a final significa que vou escrever um comando de regex no meio 
var dia = data.match(/^\d{2}/)         //o "^" significa procurar no inicio da string, o "\d" significa que quero procurar digitos numericos, o "{2}" expecifico que quero exatamente 2 digitos
var mes = data.match(/\/\d{2}\//).toString().replace(/\//g,"")  // o "\" significa que qeuro dar um comando, tive que usar o metodo toString para forcar ser um objeto string para poder ter acesso ao metodo replace, no replace usei a letra "g" que significa global para poder substituir as duas "//" em uma unica vez.
var ano = data.match(/\d{4}/)          //o "\d" significa que quero procurar digitos numericos, o "{4}" expecifica que quero exatamente 4 digitos


console.log("Dia: " + dia)
console.log("Mes: " + mes)
console.log("ano: " + ano)
