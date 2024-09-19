// Tipos de datos

// 1. String o cadena de texto
// 2. Numerico 
// 3. Boleanos
// 4. Arreglos 
// 5. Funciones
// 6. objetos 

// function sayHello () { // Una funcion tradicional
//     console.log('Hola soy una funcion');
// }

// sayHello();

// arrow function || funcion flecha
// Es una nueva forma de escribir funciones en JS para guardarla en una variable

// const sayHello = () => {
//     console.log('Hola soy una funcion flecha');
// }

// sayHello();

// ----------------------------------------------------------------------

// const isAdult = (age) => {
//     const result = age > 18 // true
//     console.log(`¿Es adulto?, ${result}`);
//     return result;
// }

// const personIsAdult = isAdult(19)
// console.log(`Una persona de 19 años es adulta?`, personIsAdult);

// ------------------------------------------------------------------------------

// Objetos en JS
// Un obejto en JS es una estructrua de datos que permite almacenar colecciones de valores,
// como atributos o propiedades

// const dog = {
//     name: 'Firulais',
//     age: 5,
//     color: 'negro',
//     raza: 'criollo',
//     estaVacunado: true
// }

// Puedo ver todo mi objeto
// console.log('Mi objeto perro es: ', dog);

// ---------------------------------------------------

// const product = {
//     name: 'celular',
//     color: ['negro', 'verde', 'blanco', 'gris'],
//     marca: 'iphone',
//     cantidadStock: 150,
//     precio: 5000000,
//     descuento: 10, // 10%
//     disponibleEntregaInmediata: false
// }

// console.log("Todo mi arreglo es: ", product);
// console.log('La marca del producto es: ', product.marca)

// reto: Si el producto esta disponible para entrega inmediata 
// vamos a imprimir 'Lo recibiras hoy'
// si no, vamos a imprimir 'lo recibiras despues'

// if(product.disponibleEntregaInmediata){
//     console.log('Lo recibiras hoy');
// } else {
//     console.log('Lo recibiras despues');
// }

// ---------------------------------------------------------------------

// const product = {
//     name: 'celular',
//     color: ['negro', 'verde', 'blanco', 'gris'],
//     marca: 'iphone',
//     cantidadStock: 150,
//     precio: 5000000,
//     descuento: 10, // 10%
//     disponibleEntregaInmediata: false
// }

// Operaciones con los objetos

// 1. Puedo sobreescirbir una propiedad
// product.marca = 'xiaomi';
// 2. Puedo agregar una propiedad
// product.sePuedeFinanciar = false;
// 3. Puedo quitar o eliminar una propiedad
// delete product.descuento;

// console.log(product);

// ---------------------------------------------------------------

// const dog = {
//     name: 'Firulais',
//     age: 5,
//     color: 'negro',
//     raza: 'criollo',
//     estaVacunado: true,
//     // saludar: () => { // funcion flecha dentro de un objeto
//     //     console.log('Hola soy firulais'); 
//     // },
//     saludar: function () { // funcion tradicional dentro de un objeto
//         console.log('Hola soy firulais');
//     }
// }

// console.log('El nombre del perro es: ', dog.name)
// console.log('La edad del perro es: ', dog.age)
// dog.saludar();

// -------------------------------------------------------------------------

const product = {
    name: 'celular',
    color: ['negro', 'verde', 'blanco', 'gris'],
    marca: 'iphone',
    cantidadStock: 150,
    precio: 5000000,
    descuento: 500000, // 10%
    disponibleEntregaInmediata: false,
    obtenerPrecioTotal: () => {
        const totalPrice = product.precio - product.descuento
        return totalPrice
    },
    isColorAvalable: (color) => {
        return product.color.includes(color);
    }
}

const precioTotal = product.obtenerPrecioTotal();
console.log('El precio total del iphone es: ', precioTotal)

const disponibleEnVerde = product.isColorAvalable('verde')
console.log(`Esta disponible en color verde? ${disponibleEnVerde}`);

const disponibleEnMorado = product.isColorAvalable('morado')
console.log(`Esta disponible en color morado? ${disponibleEnMorado}`);


// -------------------------------------------------------------------
// dentro de los objetos podemos incluir arreglos (Arreglo dentro de objeto)
const color = {
    colores: ['azul', 'blanco', 'morado'],
    tamaños: ['grande', 'mediano', 'pequeño']   
}

// Objetos dentro de arreglo (dentro del arreglo animal hay los siguientes atributos:
// animal, esVeloz, age, name)

const animal = [
    {animal: 'perro', esVeloz: true, age: 7, name: 'firulais'},
    {animal: 'gato', esVeloz: true, age: 4, name: 'dante'},
    {animal: 'tortuga', esVeloz: false, age: 13, name: 'delfinito'}
]

console.log(animal[1]);
