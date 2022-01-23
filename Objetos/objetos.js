const pessoa = {
    nome: "Neilton",
    idade: "29",
    cidade: "Curitiba"
}

//notação de ponto

console.log(pessoa.nome) // Neilton

//notação de colchetes
pessoa['idade']//29
console.log(pessoa['idade'])

// como desestruturar objetos
const{nome, idade, cidade}= pessoa
console.log(nome)
console.log(idade)
console.log(cidade)





