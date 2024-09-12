// La libreria de matematicas de JS

// 1. Generar numeros aleatorios
// Math.random() -> genera un numero aleatorio entre 0 y 1
// console.log(Math.random());

// Math.random() * 10 Generar un numero aleatorio entre 0 y 10
// console.log(Math.random()*10)

// Math.random() * 100 Generar un numero aleatorio entre 0 y 100
// console.log(Math.random()*100);

// Math.random() * (max - min) + min Generar un numero aleatorio entre 15 y 30
// console.log(Math.random() * (30 - 15) + 15);

// 2. Math.round() -> Redondear un numero

// const numero = Math.random()*10 // 8.234544656
// const redondear = Math.round(numero) // 8
// console.log(redondear); // 8

console.log(Math.round(Math.random()*10))

const arreglo = [];

const numero = Math.random()*10
arreglo.push(numero);
