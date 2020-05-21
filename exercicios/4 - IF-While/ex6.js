//Crie um programa que peça ao usuário o nome e a idade de n pessoas e os imprima na tela 
//(EX.: “O nome digitado foi: Robson”.). O programa deve ser interrompido quando o usuário digitar o nome “Final”. 
//No final, o programa deve imprimir o número de usuários que foram cadastrados no total. 
 


const rs=require('readline-sync')

var quantidade = 0


while(true) {
    var nome = rs.question("\n Digite um nome: ")

    if(nome.toUpperCase() == "FINAL") {
        break
    }

    
    var idade = rs.questionInt("Digite a idade de " + nome + ": ")
    console.log(nome + " tem " + idade + " anos")

    quantidade++
}


console.log("Foram cadastrados " + quantidade + " alunos")
