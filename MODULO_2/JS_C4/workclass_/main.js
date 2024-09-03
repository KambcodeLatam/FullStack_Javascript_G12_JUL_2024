// Escribe un programa que pregunte la nacionalidad del usuario y con esta nacionalidad
// dar un saludo por medio del document.write(), ejemplo:
// - Hola, eres Colombiano


// De la forma menos eficiente
// const country = prompt('Digita tu pais de origen'); // peru

// if(country === "colombia"){ // false
//     document.write('Hola, eres colombiano');
// }

// if(country === "panama"){ // false
//     document.write('Hola, eres panameño');
// }

// if(country === "venezuela"){ // false
//     document.write('Hola, eres venezolano');
// }

// if(country === "peru"){ // true
//     document.write('Hola, eres peruano');
// } else {
//     document.write('NO perteneces a ninguno de los paises registrados');
// }

// document.write('<br>Fin del programa');

// ---------------------------------------------------------------------------
// De la forma eficiente, porque nos ayuda a reducir recursos

// const country = prompt('Digita tu pais de origen'); // ecuador

// if(country === "colombia"){ // false
//     document.write('Hola, eres colombiano');
// } else if(country === "panama"){ // false
//     document.write('Hola, eres panameño');
// } else if(country === "venezuela"){ // false
//     document.write('Hola, eres venezolano');
// } else if(country === "peru"){ // false
//     document.write('Hola, eres peruano');
// } else {
//     document.write('NO perteneces a ninguno de los paises registrados');
// }

// document.write('<br>Fin del programa');

// -----------------------------------------------------------------

// Escribe un programa para una empresa que tiene salas de juegos para 
// todas las edades y quiere calcular de forma automática el precio que 
// debe cobrar a sus clientes por entrar.

// - 
// - Si el usuario tiene 8 años o menos ingresa gratis
// - Si el usuario tiene entre 5 y 15 años debe pagar 5 euros
// - Si el usario tiene entre 16 y 20 años debe pagar 10 euros
// - Si el usuario tiene más de 20 años debe pagar 20 euros

// const age = Number(prompt('Digita tu edad'))

// if(age <= 8){
//     document.write('<br>Ingresas gratis')
// }

// if(age >= 5 && age <= 15){
//     document.write('<br>Pagaras 5 euros')
// }

// if(age >= 16 && age <= 20){
//     document.write('<br>Pagaras 10 euros')
// }

// if(age > 20){
//     document.write('<br>Pagaras 20 euros')
// }

// De la manera mas eficiente

// const age = Number(prompt('Digita tu edad')) // 7

// if(age <= 8){ // true
//     document.write('<br>Ingresas gratis')
// } else if(age >= 5 && age <= 15){
//     document.write('<br>Pagaras 5 euros')
// } else if(age >= 16 && age <= 20){
//     document.write('<br>Pagaras 10 euros')
// } else if(age > 20){
//     document.write('<br>Pagaras 20 euros')
// }

// RETO:

// Crar un programa que calcule el precio de entrada a un bar
// Tiene que preguntar el genero de la persona (male / female)
// Preguntar la edad

// - Los menores de 18 años (sean hombre o mujer) -> NO pueden Ingresar
// - Las mujeres siempre entran gratis
// - Los mayores de 18 años -> Pagan cover de $30.000

const genero = prompt('Digita tu genero (male/female)');
const age = Number(prompt('Digita tu edad'));

if(age < 18){
    document.write('No puedes ingresar')
} else if(genero === 'female'){
    document.write('Ingresas Gratis')
} else {
    document.write('Pagas cover de $30.000')
}


// --------------------------------------------------------------------------------

// Ejercicio 2.
// Crear un programa que pida a él usuario un color de camiseta y una talla (S/M/L/XL)
// el programa debe decirle a él usuario cuantas camisetas hay disponibles
// De acuerdo a la siguiente tabla:

// - azules de talla L -> 4 camisetas
// - azules de talla M -> 10 camisetas
// - azules de talla S -> 6 camisetas
// - amarillas de talla M -> 8 camisetas
// - verde de talla S -> 2 camisetas
// - De los demás colores y tallas no hay disponibles

const size = (prompt('Escribe la talla de camiseta')).toLowerCase();
const color = (prompt('Escribe el color')).toLowerCase();

if(color === 'azul' && size === "l"){
    document.write('Hay 4 camisetas disponibles')
} else if(color === 'azul' && size === "m"){
    document.write('Hay 10 camisetas disponibles')
} else if(color === 'azul' && size === "s"){
    document.write('Hay 6 camisetas disponibles')
} else if(color === 'amarillo' && size === "m"){
    document.write('Hay 8 camisetas disponibles')
} else if(color === 'verde' && size === "s"){
    document.write('Hay 2 camisetas disponibles')
} else {
    document.write('De los demás colores y tallas no hay disponibles')
}

// .toLowerCase() -> Pasa todo el texto a minuscula
// .toUpperCase() -> Pasa todo el texto a mayuscula

const operacion = prompt('Digita la operacion que deseas realizar (+, -, *, /)')