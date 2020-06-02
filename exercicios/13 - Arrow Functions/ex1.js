var fs = require("fs")
const rs = require("readline-sync")

// function verificaCavalo(valor_parametro) { geito classico de se fazer uma funcao 
//     if(valor_parametro >= entrada) {
//         return true
//     }

//     return false
// }

var verificaCavalo = (valor_parametro)  => valor_parametro >= entrada  // forma resumida de uma funcao com apenas 1 linha




var entrada = rs.questionInt("Digite uma potencia: ")

var arquivo = fs.readFileSync("carros.json") //pegando todas os dados do arquivo carro.json
var cars = JSON.parse(arquivo)  //trasformando os dados que estao como tipo String para Json 

var carrosFiltrados = cars.filter(            //crinado a lista carrosFIltrados que recebe os carros filtrados da lista cars utilizando o metodo Filter
    (carro) => carro.Horsepower >= entrada    //geito de escrever uma arrow functions 
)

console.log("Existem " + carrosFiltrados.length + " carros com potencia acima de " + entrada)