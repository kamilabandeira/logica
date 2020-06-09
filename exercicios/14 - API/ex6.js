// Faça um algoritmo que receba uma equação do usuário e retorna o resultado
// simplificado
// Utilize a api : https://newton.now.sh/simplify/{equacao}
// Exemplo das entradas
// 2*2 = 2 vezes 2
// 2+2 = 2 mais 2
// 2-2 = 2 menos 2
// 2(over)2 = 2 dividido por 2
// 2^2 = 2 elevado a 2

const axios = require("axios")
const rs = require("readline-sync")

var equacao = rs.question("Digite uma equacao: ")

axios.get("https://newton.now.sh/simplify/" + equacao).then( (res) => {
    var resultado = res.data.result

    console.log("O resultado eh: " + resultado)

}).catch( (error) => {
    console.log("error ----> " + error)

})