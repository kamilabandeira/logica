const sqlite = require("sqlite3")

const db = new sqlite.Database("max.db", erro => {
    if (erro) {
        console.log(erro)
    }else {
        console.log("Conectado com sucesso no banco de dados! ")
        db.run("CREATE TABLE Carro (marca text, modelo text, cor text, ano integer)")
    }

})

// var query = "INSERT INTO Carro (marca, modelo, cor, ano) VALUES ("volkswagen", "fusca", "preto", 1965)"


function pegaCarroDepoisDoAno(ano) {
    const consulta = "SELECT = FROM Carro WHERE ano > ?"
    db.all(consulta, (ano), (listaDeCarros) => {
        if (e) {
            console.log(e.message)
        }else {
            listaDeCarros.forEach(carro => console.log(carro))
        }       
    }); 
}

pegaCarroDepoisDoAno(2000)
console.log("terminou")