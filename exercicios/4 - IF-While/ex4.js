var n1 = 1
var n2 = 1000
var resultado = 0


while(n1 <= n2) {
    var resto_3 = n1 % 3
    var resto_5 = n1 % 5

    if(resto_3 == 0 && resto_5 == 0) {
        resultado = resultado + n1
    }

    n1++
}
//3 6 9 12 15 => 45
//5 10 => 15
console.log(resultado)