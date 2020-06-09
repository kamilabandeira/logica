// (OBRIGATÓRIO)Faça um algoritmo que receba uma CEP e diga qual é o endereço
// completo (Cidade, rua, estado) deste CEP.
// Utilize a API : https://api.postmon.com.br/v1/cep/{CEP}
// Exemplo CEP :https://api.postmon.com.br/v1/cep/89010020


const axios = require("axios")
const rs = require("readline-sync")

var CEP = rs.question("Digite o CEP: ")



axios.get("https://api.postmon.com.br/v1/cep/" + CEP).then( (response) => {
    var cidade = response.data.cidade
    var rua = response.data.logradouro
    var estado = response.data.estado

    console.log(`A cidade eh: ${cidade}`)
    console.log(`A rua eh: ${rua}`)
    console.log(`O estado eh: ${estado}`)


}).catch( (error) => {
    console.log("\n O CEP " + CEP + " nao existe:\n error ----> " + error)
})
