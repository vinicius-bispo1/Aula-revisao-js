console.log("Boa noite!!")

// variaveis

let numeros = 719845265

let senha = 1234 //number

let nome = "vinicius"// string

let user = "vini_bispo15"

user = "vini_dev"
console.log(user)

const cpf = 8888888

const termosDeUso = true // boolen

// operadores de comparação

// = atribuição de tipo
let numero = "2";

//  == verificação de valor
console.log(numero == 2); //true pois o valor de numero é 2 mesmo sendo string

//  === verificação de tipo e valor
console.log(numero === 2); //false pois numero é do tipo string e 2 é do tipo number

//  > maior que
console.log(numero > 0); //true pois numero é maior que 0

//  < menor que
console.log(numero < 0); //false pois numero não é menor que 0

//  >= maior ou igual
console.log(numero >= 0); //true pois numero é maior que 0

//  <= menor ou igual
console.log(numero <= 8); //true pois numero é menor que 8

// condições

// if(condição){
//     console.log("retorno")
// }

// let totalDeCompra = prompt("Digite o valor da sua compra")

// if(totalDeCompra >= 20){
//   alert("Frete Gratis!!!")
// }else{
//   alert("Negado")
// }

let nota = 4

if(nota > 5){
 console.log("Aprovado")
}else if(nota == 5){
    console.log("Está na Media")
}else{
    console.log("Reprovado")
}