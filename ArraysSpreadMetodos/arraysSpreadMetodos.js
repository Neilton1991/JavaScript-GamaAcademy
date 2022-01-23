const alunasGama= ["Paula", "Maria","Estela","Clara"]
//Acessar informações no array
console.log(alunasGama[3])//clara

//Operador spread(...)
const alunasXp = [...alunasGama, "Simara"]
console.log(alunasXp)

// metodos de interação
/*for (let i= 0;i<alunasXp.length;i++){
    console.log(alunasXp[i])
}*/

//MAP
alunasXp.map(aluna=>console.log(aluna))

//FILTER(recebe os arrays com informações filtradas)
/*const numeros = [34, 45, 67, 90, 55, 76]
const numerosImpares = numeros.filter(numero=>numero%2 !=0)
console.log(numerosImpares)*/

const numeros = [34, 45, 67, 90, 55, 76]
const numerosPares = numeros.filter(numero=>numero%2 ==0)
console.log(numerosPares)

//REDUCE(Reduz nosso array a um resultado de uma operação matemática)
const numbers = [1, 34, 35]
const soma = numbers.reduce((valorAnterior, valorAtual)=>{
    return valorAnterior+ valorAtual
},5)
console.log(soma)//75 que é a soma + o 5 de baixo






