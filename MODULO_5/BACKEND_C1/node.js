// const ejemplo = 'rojo'

// if(ejemplo === 'algo') {
//     console.log('funciona el if')
// }else if(ejemplo === 'diferente'){
//     console.log('es diferente')
// }else {
//     console.log('no esta contemplado')
// }

// switch (ejemplo) {
//     case 'rojo' : 
//         console.log('el color es rojo')
//         break;
//     case 'azul': 
//         console.log('el color es azul')
//         break;
//     default:
//         console.log('no tenemos ese color')
// }

// arrays (arreglos | listas) objects u objetos

// const manzana = {
//     nombre: 'manzana',
//     color: 'rojo',
//     estado: 'maduro',
//     sabor: 'dulce'
// }
// const banana = {
//     nombre: 'Banana',
//     color: 'amarillo',
//     estado: 'podrida',
//     sabor: 'feo'
// } 
// const pera = {
//     nombre: 'pera',
//     color: 'verde',
//     estado: 'verde',
//     sabor: 'acido'
// }
// const frutas = [manzana, banana, pera]
// console.log(frutas)
// console.log('-------------------------')
// frutas.push({
//     nombre: 'limon',
//     color: 'verde',
//     estado: 'maduro',
//     sabor: 'acido'
// })
// console.log(frutas)

// const frutaFiltrada = frutas.filter((fruta) => fruta.sabor === 'acido')
// console.log(frutaFiltrada)
// console.log('----------------------')
// console.log(frutas)

// const fruta = new Object()
// fruta.nombre = 'guanabana'
// fruta.color = 'verde'
// fruta.estado = 'maduro'
// fruta.sabor = 'dulce'

// console.log(fruta)

// Loops 

// const array = ['U','N','I','V','E','R','S','O'];
// for(let index = 0; index < array.length; index++){
//     const elemento = array[index]
//     console.log(elemento)
// }

// let posicion = 0

// while(posicion < array.length){
//     const elemento = array[posicion]
//     console.log(elemento)
//     posicion += 1
// }

// https://www.w3schools.com/js/js_2024.asp guia ecmascript

const numeros = [2, 5, 7, 1, 3, 4]
const numerosPares = []
for(let numero of numeros){
    numerosPares.push(numero*2)
}
// console.log(numerosPares)

const numerosParesMap = numeros.map((numero) => numero*2 )

const nuevosNumeros = numeros.map(numero => {
    if(numero % 2 === 0){
        return numero * 2
    }else {
        return numero * 3
    }
})
console.log(nuevosNumeros)