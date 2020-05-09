// Adicione no programa anterior após a impressão dos dados que ele salve o objeto carro em formato JSON. 
// Utilize o JSON.stringify para transformar o objeto em string e após isso utilize os métodos da biblioteca ‘fs’ para salvar o arquivo.
// Salve o json como ‘carro.json’


const rs = require('readline-sync');
const fs = require('file-system')


var cor_entrada = rs.question("Digite uma cor: ")
var modelo_entrada = rs.question("Digite uma modelo: ")
var marca_entrada = rs.question("Digite uma marca: ")

var carro = new Object()  

carro.cor = cor_entrada    
carro.modelo = modelo_entrada  
carro.marca = marca_entrada  

console.log("Objeto: ")
console.log(carro)

var carro_json = JSON.stringify(carro) //trasformando o objeto carro em json

console.log("Json: " + carro_json)

//escrevendo o arquivo
var arquivo = "carro.json"
fs.writeFile(arquivo, carro_json)



