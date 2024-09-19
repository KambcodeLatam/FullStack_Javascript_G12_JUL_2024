// console.log('Hola');

// Arreglos || Listas || Array
// Los arreglos son listas o estrcuturas que permiten almacenar multiples valores
// de diferentes tipos de datos ó mismos tipos de datos

const contenido = ['Amazon music', 'Libros', 'Amazon'];

// Ejemplo una variable que tiene una lista de productos 

// const shoppingList = ['leche', 'queso', 'pan', 'arroz', 'manzanas']; // Cadenas
// console.log('Mi lista de compras', shoppingList);

const years = [2000, 2002, 2010, 2024]; // Datos numericos
// console.log('Arreglo de numeros', years);

const mixedArray = ['kambcode', 3, true, 'Latam', 45, false];
// console.log('Este es un array mixto', mixedArray);

const vacio = [];
// console.log(vacio);

// Utilidades de los arreglos
// 1. Como saber cuantos elemento tiene un arreglo .length

let shoppingList = ['leche', 'queso', 'pan', 'arroz', 'manzanas'];
// console.log('Mi arreglo es:', shoppingList);
// console.log('El numero de elementos de este arreglo son: ', shoppingList.length);

// 2. Para agregar elementos a un array utilizamaos el metodo .push()
// shoppingList.push('uvas', 'sandia', 'mandarina');
// console.log(shoppingList);

// 3. Podemos consultar un elemento de la lista en particular
// console.log('El primer elemento de la lista es:', shoppingList[0]) // leche
// console.log('El segundo elemento de la lista es:', shoppingList[1]) // queso
// console.log('El quinto elemento de la lista es:', shoppingList[4]) // manzanas

// 4. Podemos reemplazar un elemento de un array
// nuestro arreglo ya no quiero que este pan si no azucar
// shoppingList[2] = 'azucar'
// console.log(shoppingList);

// 5. Podemos consultar si un elemento esta dentro del arreglo .includes()

// console.log(shoppingList.includes('azucar')); // true

// ------------------------------------------------------------------------------------

// Hacer un programa que por medio de prompt, le pida al usuario 3 productos y estos
// productos se vayan añadiendo a un array

// const shoppingList2 = [];

// const element1 = prompt('Digita el primer producto'); // mandarina
// shoppingList2.push(element1);

// const element2 = prompt('Digita el segundo producto'); // azucar
// shoppingList2.push(element2);

// const element3 = prompt('Digita el tercer producto'); // sandia
// shoppingList2.push(element3);

// console.log(shoppingList2);

// Solcion por medio de ciclos

const shoppingList3 = [];

// for(let counter = 1; counter <= 3; counter++){
    // const element = prompt('Digita un producto'); // mandarina, azucar, sandia
    // shoppingList3.push(element);
// }

// console.log(shoppingList3);
