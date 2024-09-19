// Apartir de un arreglo, crea una variable que muestre cual es el numero mayor

// const numeros = [10, 23, 54, 45, 87, 98, 23, 56]; // 98
// let max = 0;

// for(let i = 0; i < numeros.length; i = i + 1){ // i = 3 -> TRUE
//     if(numeros[i] > max){ // (45 > 54) -> FALSE
//         max = numeros[i]; //  max = 54
//     }
// }

// console.log(max);

// -----------------------------------------------------------------------
// Otra forma de recorrer arreglos, for ... of´
// for(let x of array)

// const numeros = [10, 23, 54, 45, 87, 98, 23, 112, 56]; // 98
// let max = 0;

// for(let num of numeros){
//     if(num > max){
//         max = num 
//     }
// }

// console.log(max);


// --------------------------------------------------------------------------

// Funciones
// Una funcion en JS es un bloque de codigo reutilizable, que realiza una tarea
// especifica.

// Realizar un programa que pregunte los años y el nombre y con esto en la salida
// en la consola enviar un saludo

// const persona1 = 'Pepito';
// const persona1Age = 30;
// const birthDate = 2024 - persona1Age;
// console.log(`Hola ${persona1}, naciste en ${birthDate}`);

// const persona2 = 'Juan';
// const persona2Age = 24;
// const birthDate2 = 2024 - persona2Age;
// console.log(`Hola ${persona2}, naciste en ${birthDate2}`);

// const persona3 = 'Ana';
// const persona3Age = 44;
// const birthDate3 = 2024 - persona3Age;
// console.log(`Hola ${persona3}, naciste en ${birthDate3}`);

// De la manera correcta con funciones, ya que podemos reutilizar el bloque de codigo
// function nombre (parametro){El bloque de codigo, de lo que voy a realizar con esta funcion}
// parametro o argumento = Es un tipo de dato que recibe nuestra funcion

function calcularFechaNacimiento (age) { 
    const birthDate = 2024 - age;
    console.log(`Naciste en ${birthDate}`);
}


// calcularFechaNacimiento(44); // Ana -> Utilzamos nuestra funcion 1 vez

const persona2 = 'Juan'
const persona2Age = 24;
// calcularFechaNacimiento(persona2Age); // Juan -> Utilizamos nuestra funcion otra vez
const persona3 = 'Pepito'
const persona3Age = 30;
// calcularFechaNacimiento(persona3Age); // Pepito -> Utilizamos nuestra funcion otra vez

// --------------------------------------------------------
// Tambien pueden haber funciones que no reciban parametros

function diHola () {
    console.log('Hola');
}

diHola();

// --------------------------------------------------------

// Reto:
const person1 = 'Pablo';
const person2 = 'Pedro';
const person3 = 'Luisa';

// Escribe una funcion que reciba un nombre y que salude a la persona
// ejemplo: console.log("hola", personaName)
function sayHello (name) {
    console.log(`Hola ${name}`);
}

// sayHello(person1); // "Hola Pablo"
// sayHello(person2); // "Hola Pedro"
// sayHello(person3); // "Hola Luisa"

// ----------------------------------------------- 
// mercadolibre
// Facturacion

function factura (precio){
    console.log('El total a pagar es', precio);
}

// Primera vez de uso de funcion (primera parte de confirmacion)
// factura(80000) // Rectificando del producto y el precio que va comprar

// Segunda vez de uso de funcion (pasarela de pagos)
// factura(80000) // Segunda confirmacion antes del pago

// Tercer vez de uso de funcion (factura electronica)
// factura(80000)

// --------------------------------------------------------------------------
// return = En una funcion se utiliza el return para devolver un valor desde la funcion
//          al lugar donde fue llamada esta.

// 1. Vamos a crear una funcion que calcule el IMC de una persona
// imc = peso / (altura * altura) // resuelto
// 2. Con este IMC crear una condicion:
// - imc < 10 -> EL IMC esta normal
// - imc >= 10 -> EL IMC esta elevado

function calcImc (peso, altura){
    const result = peso / (altura * altura); // 17.67
    console.log(`Tu IMC es ${result}`); 
    return result // 17.67
}

const imc = calcImc(56, 1.78); // 17.67

if(imc < 10){ // False
    console.log('EL IMC esta normal');
} else {
    console.log('EL IMC esta elevado');
}

// --------------------------------------------
// Reto 2
// Crear una funcion que calcule el valor de un producto + el envio

// function calPrecioTotal (precioProducto, precioEnvio){
// La funcion debe retornar precioProducto + precioEnvio
// }

function calPrecioTotal (precioProducto, precioEnvio){
    const precioTotal = precioProducto + precioEnvio
    return precioTotal
}

console.log(calPrecioTotal(10000, 3000)); // 13000


// Puedo enviar arreglos como paramtros a mi funcion, como por ejemplo:
function array (myArray){
    console.log(myArray)
}

array([1, 5, 2]);