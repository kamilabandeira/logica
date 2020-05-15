var rs = require('readline-sync')

var media = []



for(var i = 0; i < 3; i++){
    var m=[]
    m = rs.questionFloat('Digite um número: ')
    
    media.push(m)
}


// for(var i = 0; i < 3; i++){
//     media = rs.questionInt('Digite um número: ')
// }


console.log(media)



function calculaMedia(){
    var mediaDeTodos = 0
    mediaDeTodos = mediaDeTodos + (media[0]/media.length)
    mediaDeTodos = mediaDeTodos + (media[1]/media.length)
    mediaDeTodos = mediaDeTodos + (media[2]/media.length)

    console.log(mediaDeTodos)
    return calculaMedia
}

calculaMedia()
