// ARRAYS
// Es una estructura de datos que puede contener múltiples elementos, 
// accesibles a través de un índice numérico (empieza en 0).
// Cada elemento que se guarda dentro de un arreglo o lista
// puede ser de cualquier tipo de dato, tanto primitivos (string, boolean, number, null, undefined, etc) como objetos y arrays.
const arrayPrincipal = [1, 2, 3, 'text', true, false, null, undefined, { a: 1 }, [ 'estudiante1', 'estudiante2' ]];
//console.log(arrayPrincipal);

// Acceso a un elemento dentro de un array
console.log(arrayPrincipal[0]);
console.log(arrayPrincipal[1]);
console.log(arrayPrincipal[2]);
console.log(arrayPrincipal[3]);

console.log(arrayPrincipal.length); // 10

console.log(arrayPrincipal[9]); // Solo funciona cuando el array tiene 10 elementos

console.log(arrayPrincipal[arrayPrincipal.length - 1]); // Funciona siempre, asi el array tenga 2 o 1 millon de elementos

console.log(arrayPrincipal[arrayPrincipal.length - 1][0]);
console.log(arrayPrincipal[arrayPrincipal.length - 1][1]);

const arrayEstudiantes = arrayPrincipal[arrayPrincipal.length - 1]; // [ 'estudiante1', 'estudiante2' ]
console.log(arrayEstudiantes[arrayEstudiantes.length - 1]);

// Modificar el valor dentro de un array
arrayPrincipal[0] = true;
arrayPrincipal[1] = 'cadena';
arrayPrincipal[2] = 50;
arrayPrincipal[arrayPrincipal.length - 1] = 'lo que sea';

console.log(arrayPrincipal);


// Ciclos
for (let i = 0; i > 5; i++) {
    console.log('desde el for: ', + i);
}

let count = 0;
while(count < 5) {
    console.log('desde el while: ', count);
    count++;
}

// Iteracion con arrays
// Podemos usar ciclos para acceder a cada elemento dentro de un array
// y ejecutar cualquier codigo con ese elemento

// Ciclo for
for (let i = 0; i < arrayPrincipal.length; i++) {
    const element = arrayPrincipal[i];
    console.log(`${i}: ${element}`);
}

// Ciclo for of
for (const element of arrayPrincipal) {
    console.log(element);
}

// Ciclo forEach -> built-in
arrayPrincipal.forEach((element, index) => console.log(`${index}: ${element}`));


// Probemos algunos metodos (y propiedades) que por defecto tienen los arrays en js
const animals = ['tortuga', 'iguana', 'gato', 'perro', 'gaviota', 'delfin', 'tiburon'];

// length -> Muestra la cantidad de elementos que hay en un array
console.log(animals.length);

// push -> Agrega uno o mas elementos al final del array y retorna el nuevo length
// ['item1'] -> ['item1','item2']
animals.push('jirafa', 'leon');
//animals.push('jirafa');
console.log(animals);
console.log(animals.length);

// pop -> Elimina el ultimo elemento dentro de un array y lo retorna
const animalRemoved = animals.pop();
console.log(animals);
console.log(animals.length);
console.log(animalRemoved);

// shift -> Elimina el primer elemento de un array y lo retorna
const animalRemovedWithShift = animals.shift();
console.log(animals);
console.log(animals.length);
console.log(animalRemovedWithShift);

// unshift -> Agrega uno o mas elementos al inicio del array y retorna el nuevo length
animals.unshift('ballena', 'foca');
console.log(animals);
console.log(animals.length);

// split -> En realidad es un metodo de los strings pero convierte un string a un array
const palabra = 'carro';
const splittedArray = palabra.split('');
console.log(splittedArray);

// reverse -> Invierte el orden de los elementos de un array. El primer elemento pasa a ser el ultimo y viceversa
const numbers = [1,2,3,4,5,6];
numbers.reverse();
console.log(numbers);

// join -> Une todos los elementos de un array en un string y retorna ese string
const palabraArray = [ 'c', 'a', 'r', 'r', 'o' ];
console.log(palabraArray.join(''));

// Ejercicio practico: Verificar si una palabra es palindrome
const word = 'reconocer';

const splittedWord = word.split('');
console.log(splittedWord);

splittedWord.reverse();
console.log(splittedWord);

const reversedWord = splittedWord.join('');
console.log(reversedWord);

console.log('es palindrome? ', word === reversedWord);


// RETO
// Partiendo de este array de frutas ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango']
// 1. Cuales frutas tienen menos de 6 caracteres (length)
// 2. Cuales empiezan por la letra m (starsWith)
// El resultado en cada ejercicio debe ser un array con las frutas que pasaron las condiciones
const frutas = ['fresa', 'mora', 'banano', 'manzana', 'papaya', 'mango'];

const menos6DeLetrasArr = [];
const empiezaConMArr = [];

for (const fruta of frutas) {
    if (fruta.length < 6) {
        menos6DeLetrasArr.push(fruta);
    }
}

for (const fruta of frutas) {
    if (fruta.startsWith('m')) {
        empiezaConMArr.push(fruta);
    }
}

console.log(menos6DeLetrasArr);
console.log(empiezaConMArr);


// Comparacion entre arrays (referencia vs valor)
// En arrays y objetos la comparacion entre dos valores
// se hace por referencia y no por valor

// Comparacion entre primitivos
const num1 = 1;
const num2 = 1;
console.log(num1 === num2);

// Comparacion entre arrays
const arr1 = [10,5,8];
const arr2 = [10,5,8];
console.log(arr2);
console.log(arr1 === arr2);

const arr3 = arr1; // arr3 -> arr1 -> [10,5,8]
console.log('son iguales? ', arr1 === arr3);
arr3[0] = 2;
console.log(arr3);
console.log(arr1);
arr1[2] = 4;
console.log(arr3);
console.log(arr1);

// Como puedo evitarlo: operador spread
const arr4 = [...arr2];
console.log(arr4);
arr4[0] = 11;
console.log(arr4);
console.log(arr2);