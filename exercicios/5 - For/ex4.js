// Ler o nome de um aluno e suas duas notas A e B, e após calcular a média ponderada entre estas notas
// (A tem 30% do peso do grau final e B tem 70% do peso). Repetir este procedimento para uma turma composta
// por cinco alunos, usando o comando For. Exemplo de tela de saída: 
// Entre com o nome do aluno: João da Silva Entre com o grau A: 5.0 Entre com o grau B: 6.0 
// O aluno João da Silva tem uma média:5.7 

const readlineSync = require('readline-sync')

for(i = 1 ; i <= 5; i++) {
    console.log("Entre com as informaçoes do " + i + "o aluno")

    var nome_aluno = readlineSync.question("Digite o nome do aluno: ")
    var notaA = readlineSync.questionFloat("Digitte a nota A: ")
    var notaB = readlineSync.questionFloat("Digitte a nota B: ")

    var calculeA = notaA * 0.30
    var calculeB = notaB * 0.70
    var media = calculeA + calculeB

    console.log("O aluno " + nome_aluno + " tem uma media: " + media.toFixed(1))
    console.log(" ")
    console.log("---------------------------------------------------------")
    console.log("\n")
    

}

