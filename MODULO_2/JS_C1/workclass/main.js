// Javascript (js) es diferente a Java
// Tipos de Datos

// 1. String o Cadenas de texto
- "Hola mundo"
- 'Hola mundo'
- "Kambcode Latam"

// 2. Numerico
- 12
- 2024
- 1000000
- 3.1416
- 0.000002

// 3. Boleanos
- true // ->  verdadero
- false // -> false

// document.write('Kambcode Latam');

// ------------------------------------------------------
// Variables (var)
// Es la forma de almacenar un dato para modificarlo, utilizarlo o presentarlo
// Para nombrar una variable utilizamos camelCase

var precio2; // Declarar una variable
precio2 = 22; // Asignando un valor a la variable (Manera menos eficiente)

var precio = 40; // Manera mas eficiente
// document.write("El precio de los audifonos es:", precio);

// Otros ejemplos 

// Ejemplos de String
var nombreProducto = 'Audifonos Azules'
document.write("<br>", nombreProducto); // 'Audifonos Azules'

// Reasignacion variables
nombreProducto = "Auriculares estéreo para juegos para PS4 PC, Xbox One PS5"
document.write("<br>", nombreProducto)

// --------------------------------------------------------------
// Operar Datos o Operar Variables

// suma +
// resta -
// multiplicar *
// dividir /

var precio = 40
var costoDeEnvio = 10;

var costoTotal = precio + costoDeEnvio // 50
document.write("<br> El valor total que vas a pagae es: ", costoTotal);

var costoTotalX2 = costoTotal * 2
document.write("<br> El valor X2 del producto es: ", costoTotalX2);

// ---------------------------------------------------------
// alert('Esto es una alerta en JS');
// var nombreUsuario = prompt('Escriba tu nombre') // Daniel Cañon
// document.write("<br>", nombreUsuario);

var nombre = prompt("Digita tu nombre") // Daniel
var alturaCm = prompt("Digita tu altura en CM") // 178
