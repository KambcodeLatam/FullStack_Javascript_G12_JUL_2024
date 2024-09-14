// Imprimir numeros del 1 al 100 en la consola

// for(variable incial; condicion; contador){}
// for(let numero = 1; numero <= 100; numero = numero + 1){
//     console.log(`${numero}`);
// }

// Usa un ciclo para sumar los numeros del 1 al 100 y luego imprimir en la
// consola este resultado

 // 9.333

// let number = 1 // Variable incial
// let suma = 0; // Variable contenedora del resultado final

// while(number <= 100){ // condicion
//     suma = suma + number; // suma = 0 + 1 = 3
//     number = number + 1; // contador
// }

// console.log(suma) // 5050

// --------------------------------------------------------------
// Con el ciclo for

// let suma = 0;

// for(let number = 1; number <= 100; number = number + 1){
//     suma = suma + number; // suma = 3 + 4 = 7
// }

// console.log(suma);

// ---------------------------------------------------------------

// Imprima los numeros pares del 2 al 20 con ciclos e imprimmir en la consola

// for(let number = 2; number <= 20; number = number + 2){
//     console.log(`${number}`) 
// }

// ----------------------------------------------------------------

// Hacer un programa que calcule la suma de todos los numeros que hay en un arreglo y luego
// mostrar este resultado al final en la consola

// const numeros = [10, 23, 54, 45, 87]; // 219
// let sumaNumeros = 0; // contenedora del resultado final

// console.log(numeros[0]); // 10
// console.log(numeros[1]); // 23
// console.log(numeros[2]); // 54
// console.log(numeros[3]); // 45
// console.log(numeros[4]); // 87
// console.log(numeros[5]); // Undefined


// primera iteracion = 10
// segunda iteracion = 33
// tercera iteracion = 87
// cuartas iteracion = 132
// quinta iteracion = 219

// for(let i = 0; i < numeros.length; i++){ // i = 5 (5 <= 5) -> TRUE
//     sumaNumeros = sumaNumeros + numeros[i]; // sumaNumeros = 219 + Undefined = Nan
// }

// console.log(`La suma es igual: ${sumaNumeros}`)


// -----------------------------------------------------------------
// Apartir de un arreglo, crea una variable que muestre cual es el numero mayor

// const numeros = [10, 23, 54, 45, 87, 98, 23, 56]; // 98
// let max = 0; // 98
 
// for(let i = 0; i < numeros.length; i = i + 1){ // i = 3 -> TRUE
//     if(numeros[i] > max){ // (45 > 54) -> FALSE
//         max = numeros[i]; //  max = 54
//     }
// }

// console.log(max); // 98

// ----------------------------------------------------------------
// Crea un array myArray de 50 elementos (números), que contendrá 50 numeros 
// números aleatorios entre 1 y 10. Ejemplo [ 3, 2 , 6, 8, 1, 3, 5, 2 .....] 
// (50 elementos)

// const arrayAleatorio = []; // 50 numeros aleatorios 

// for(let i = 1; i <= 50; i++){
//     arrayAleatorio.push(Math.round(Math.random() * 10) * 1);
// }

// Usando el array que creaste en el punto 1, vamos a crear un nuevo arreglo llamado newArray 
// que contenga solo los numeros que son menores a 4. Ejemplo si en punto 1 generaste un 
// arreglo myArray como este [7,2,5,2,9,3,1,4,8], tu nuevo arreglo newArray debera ser
// [2,2,3,1]. Tip Utiliza un for para recorrer el primer myArray arreglo e ir llenando
// el segundo (newArray.push) pero solo si el valor es menor a 4.

; // solamente los numeros menores a 4, del arrayAleatorio


// const nuevo = [];

// for(let j = 0; j < arrayAleatorio.length; j++){
//     if(arrayAleatorio[j] < 4){ // true
//         nuevo.push(arrayAleatorio[j])
//     }
// }

// console.log(arrayAleatorio); // 50 numeros
// console.log(nuevo); // solamente los menores a 4


//-----------------------------------------------------
// Ejercicios Unidos

const arrayAleatorio = []; // 50 numeros aleatorios 
const nuevo = []; // solamente los menores a 4

for(let i = 0; i <= 50; i++){
    let aleatorio = Math.round(Math.random() * 10); // 2
    arrayAleatorio.push(aleatorio)
    if(aleatorio < 4){
        nuevo.push(aleatorio);
    }
}

console.log(arrayAleatorio); // 50 numeros
console.log(nuevo); // solamente los menores a 4