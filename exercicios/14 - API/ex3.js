// (OBRIGATORIO)Faça um algoritmo que receba um número de um episódio de
// Breaking Bad.
// Após isso o algoritmo deve imprimir o elenco de personagens e também de qual
// temporada é este episódio.
// Caso o episódio seja inválido dizer ao usuário que não existe este episódio.
// Utilize a api : https://www.breakingbadapi.com/api/episodes/{NUMERO_DO_EPISODIO}
// Exemplo episodio 10 : https://www.breakingbadapi.com/api/episodes/10


const axios = require("axios")
const rs = require("readline-sync")

var NUMERO_DO_EPISODIO = rs.questionInt("Digite o numero do epsodio: ")

axios.get("https://www.breakingbadapi.com/api/episodes/" + NUMERO_DO_EPISODIO).then( (response) => {
    var elenco = response.data[0].characters
    var temporada = response.data[0].season

    console.log(`O numero da temporada eh: ${temporada}`)
    console.log(`Com o elenco: ${elenco}`)


}).catch( (error) => {
    console.log("\n O epsodio " + NUMERO_DO_EPISODIO + " nao existe:\n error ----> " + error)
})
