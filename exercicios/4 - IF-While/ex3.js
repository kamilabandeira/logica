// Escreva um programa javascript para escrever o seguinte padrão na
// tela, com N linhas:
// *
// * *
// * * *
// * * * *
// * * * * *
// Onde N é um número maior que zero determinado pelo usuário (no exemplo, N=5).


var n = 5
var cont = 1

while(cont <= n) {

    var cont_estrela = 1
    var estrela = ""
    while(cont_estrela <= cont) {
        estrela = estrela + "*"

        cont_estrela++
    }

    console.log(estrela)
    cont++
}


