//if ...else

/*if(idade>=18){
    return"Maior de idade"
}else {
    return "Menor de idade"
}*/

//idade>=18? 'Maior de idade':'Menor de idade'


//EXEMPLO1
/*function calculaIdade(idade){
    if (idade >=18){
        return 'Maior de idade'
    }else {
        return 'Menor de idade'
    }
}

console.log(calculaIdade(20))*/

function calculaIdade(idade) {
   return idade>=18 ? "Maior de idade":"Menor de idade"
}
console.log(calculaIdade(17))