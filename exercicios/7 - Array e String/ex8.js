//Faça um programa que vai receber duas entradas  A primeira entrada é o cabeçalho (HEADER) ela vai possuir 
//o seguinte formato campo1;campo2;campo3;campo4 Onde se quebrarmos a string por ‘;’ teremos o seguinte array 
//[0] campo1 [1] campo2 [2] campo3 [3] campo4 
//A quantidade de campos depende da quantidade de ‘;’ na entrada do cabeçalho então se o usuário inserir mais ; 
//terá mais campos no array Utilize o método split(‘;’) para converter a string para array 
//A segunda entrada é o dado (DATA) ele vai possuir o mesmo formato acima porém com valores
//entre ‘;’ valor1;valor2;valor3;valor4 [0] valor1 [1] valor2 [2] valor3 [3] valor4 A quantidade de campos depende 
//da quantidade de ‘;’ na entrada do dado então se o usuário inserir mais ; terá mais campos no array 
//Utilize o método split(‘;’) para converter a string para array 
//As duas entradas devem possuir a mesma quantidade de “;” isso vai permitir que elas tenham tamanhos iguais 
//no array e então teremos uma associação parecida com essa abaixo :  Suponha que o usuario 
//inseriu :  Cabeçalho : Nome;Sobrenome;Idade;Peso Dado : Fulano;Ciclano;22;80 
//Caso a entrada possua mais campos (‘;’) que os valores ou vice versa o algoritmo deve lançar e um erro e dizer 
//que o formato não está compatível.  
//Sendo assim o algoritmo imprime :  Nome : Fulano Sobrenome : Ciclano Idade : 22 Peso : 80 
 
 

const rs = require('readline-sync')

var cabecalho = rs.question("Digite o cabecalho: ")   //variavel cabecalho
var lista_cabecalho = cabecalho.split(";")            //lista cabecalho.split para dividir/quebras onde estiver " ; "


var dado = rs.question("Digite os dados: ")           //variavel dado
var lista_dado = dado.split(";")                      //lista dado.split para dividir/quebras onde estiver " ; "

var tamanho_cabecalho = lista_cabecalho.length        //verificar o tamanho do cabecalho
var tamanho_dado = lista_dado.length                  //verificar o tamanho do dado

if(tamanho_cabecalho != tamanho_dado) {               //verificacao se o cabecalho e do mesmo tamanho de dado
    console.log("Dados invalidos ")                   //caso não seja do mesmo tamanho os dados sao invalidos
}else{
    for(i = 0; i < tamanho_dado; i++) {               //condicao de parada
        var atributo = lista_cabecalho[i].trim()      //variavel para por o atributo no cabecalho
        var valor = lista_dado[i].trim()              //variavel para por o valor no dado
    
        console.log(atributo + ": " + valor)
    }
}



