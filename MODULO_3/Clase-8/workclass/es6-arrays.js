// MAP, FILTER, FIND, FOREACH, SOME, EVERY
const numbers = [1,2,3,4,5,6,7,8];

// map: Crea un nuevo array con los resultados de llamar una función (callback) como argumento en cada elemento del array original.
const doubleArr = numbers.map(number => number * 3);
const mitadArr = numbers.map(number => number / 2);

console.log(doubleArr);
//console.log(numbers);
//console.log(mitadArr);

// Forma de hacerlo sin map
/*const newArray = [];

for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const result = number * 3;
    newArray.push(result);
}

console.log(newArray);*/


// filter: Retorna un nuevo array con TODOS los elementos que pasen una condicion proporcionada por una función (callback)
const evenNumbers = numbers.filter(number => number % 2 === 0);
const oddNumbers = numbers.filter(number => number % 2 !== 0);
console.log(evenNumbers);
console.log(oddNumbers);

// Forma de hacerlo sin filter
/*const newArray = [];
for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    const esPar = number % 2 !== 0;
    if (esPar) {
        newArray.push(number);
    }
}

console.log(newArray);*/


// find: Este método retorna el PRIMER elemento de un array que cumple una condicion dada en el callback
// Si no encuentra ningun elemento que cumpla con la condicion, retorna undefined
const frutas = ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango'];
const fruta1 = frutas.find(fruta => fruta.length < 6);
const fruta2 = frutas.find(fruta => fruta.length === 4);
const fruta3 = frutas.find(fruta => fruta.startsWith('m'));
const frutas3 = frutas.filter(fruta => fruta.startsWith('m')); // Filter retorna todos los items que cumplan la condicion
console.log(fruta1);
console.log(fruta2);
console.log(fruta3);
console.log(frutas3);

// Forma de hacerlo sin find
/*let frutaFiltrada;
for (let i = 0; i < frutas.length; i++) {
    const fruta = frutas[i];
    if (fruta.length < 6) {
        frutaFiltrada = fruta;
        break;
    }
}

console.log(frutaFiltrada);*/


// forEach: Ejecuta una funcion por cada elemento del array (callback). No retorna nada.
numbers.forEach((number, index) => {
    //console.log(`${index}`);
    //console.log(`${number}`);
    //console.log(`--------------`);
});

//console.log('********************************')

// Forma de hacerlo sin forEach
/*for (let i = 0; i < numbers.length; i++) {
    const number = numbers[i];
    console.log(`${i}`);
    console.log(`${number}`);
    console.log(`--------------`);
}*/


// some: Retorna true si al menos UN elemento del array cumple con la condicion dada en el callback
// Si no, retorna false
const numeros = [780,65,84,155,232,354,400,522];
const someGreaterThan300 = numeros.some(numero => numero > 300);
const starsWith9 = numeros.some(numero => String(numero).startsWith('9'));

console.log('alguno mayor a 300? ', someGreaterThan300);
console.log('alguno empieza con 9? ', starsWith9);
console.log('alguno esta entre 80 y 150? ', numeros.some(numero => numero >= 80 && numero <= 150));

// Forma de hacerlo sin some
/*let result = false;
for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero > 300) {
        result = true;
        break;
    }
}

console.log(result);*/


// every: Retorna true si TODOS los elementos del array cumplen una condicion dada en el callback.
// Si no, retorna false
const listaEdades = [20,22,25,38,42,17,21];
const todosSonMayoresDeEdad = listaEdades.every(edad => edad >= 18);
console.log('todos son mayores de edad? ', todosSonMayoresDeEdad);

// Forma de hacerlo sin every
/*let result = true;
for (let i = 0; i < listaEdades.length; i++) {
    const edad = listaEdades[i];
    if (!(edad >= 18)) {
        result = false;
        break;
    }
}

console.log(result);*/


// includes: Retorna true si encuentra un elemento que coincide con el valor que le pasamos como argumento
const includesSomeNumber = listaEdades.includes(12);
console.log('incluye el numero: ', includesSomeNumber);



// RETO
const numbersArray = [21, 33, 40, 50, 71, 70, 742, 80, 90, 100];

// 1. Retornar un nuevo array con los valores de las raices cuadradas de cada numero (Math.sqrt(n))
const raizCua = numbersArray.map(Math.sqrt);
console.log(raizCua);

// 2. Filtrar los numeros que empiecen en 7 y sean pares
const numPares = numbersArray.filter(number => String(number).startsWith('7') && number % 2 === 0);
console.log(numPares);