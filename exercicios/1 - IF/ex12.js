// Faça um algoritmo que leia o nome, o sexo e o estado civil de uma pessoa. Caso sexo
// seja “F” e estado civil seja “CASADA”, solicitar o tempo de casada (anos).


var rs = require("readline-sync")

var nome = rs.question("Digite seu nome: ")
var sexo = rs.question("Digite seu sexo, F para feminino e M para masculino: ")
var estado_civil = rs.question("Digite seu estado civil: ")

var tempo_de_casado = ""
                                   
if(sexo == "F" && estado_civil == "casada" ) {
    tempo_de_casado = rs.question("Digite seu tempo de casado: ")

    console.log("O tempo de casado de " + nome + " eh " + tempo_de_casado )
}
