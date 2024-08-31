// Como comparar variables
// Igualdad ==
// Igualdad exacta ===
// Mayor >
// Menor <
// Mayor o igual >=
// Menor o igual <=
// Diferencia !=
// Diferencia exacta !==
// Modulo %

// igual == Compara los valores sin tener en cuenta los tipos de datos

// document.write('15' == 15); // -> true

// igualdad exacta === Compara los valores y ademas compara los tipos de datos

// document.write("<br>",'15' === 15); // -> false
// document.write("<br>",'15' === '15'); // -> true

// mayor >
// document.write(15 > 18) // -> false
// document.write(18 > 15) // -> true

// menor <
// document.write(15 < 18) // -> true
// document.write(18 < 15) // -> false

// mayor o igual 
// document.write(18 >= 18) // -> true

// menor o igual
// document.write(15 <= 15) // -> true

// ---------------------------------------
// Diferencia != "Compara los valores sin tener en cuenta los tipos de datos"
// document.write("12" != 12) // -> false
// document.write("2024" != 2024) // false

// Diferencia exacta !== "Compara los valores y ademas compara los tipos de datos"
// document.write(18 !== '18') // -> true
// document.write(18 !== 19) // -> true
// document.write('daniel' !== 'jorge') // -> true
// document.write('daniel' !== 'daniel') // -> false

// Modulo %
// Escribe un programa que pida a él usuario un numero y luego determine si este 
// es par o es impar

// var numero = Number(prompt('Digita un número'));

// forma poco eficiente y sin solucion
// if(numero === 1){
//     document.write('El numero es impar')
// }
// if(numero === 2){
//     document.write('El numero es par')
// }
// if(numero === 3){
//     document.write('El numero es impar')
// }
// if(numero === 4){
//     document.write('El numero es par')
// }

// forma eficiente utlizando el modulo
// var numero = Number(prompt('Digita un número')); // 9

// if(numero % 2 === 0){ // -> 9 / 2 = 4 // resto = 1
//     document.write('El numero es par')
// } else {
//     document.write('El numero es impar')
// }

// -----------------------------------------------------------
// Pedir al usuario dos numeros y hacer la division de estos 2

// var numero = Number(prompt('Digita el diviendo')); // 4
// var numero2 = Number(prompt('Digita el divisor')); // 2

// document.write(numero / numero2) // -> 2

// ------------------------------------------------------------
// consola
// Nos sirve para que solamente nostros veamos nuestras pruebas y los errores

// const nombre = "Kambcode Latam";
// const peso = 70;
// const altura = 1.74;

// console.log("El valor de la variable nombre es: ", nombre);

// const imc = peso / (altura * altura);
// document.write("Su IMC es: ", imc);

// -------------------------------------------------------------------
// var vs const

// Una const se usa para declarar constantes. Una constante es una variable que no 
// puede cambiar de valor

var nombreCompleto = 'Daniel Cañon';
document.write(nombreCompleto); // Daniel Cañon

var nombreCompleto = 'Benito'; // -> REDECLARAR una variable
document.write('<br>' ,nombreCompleto); // Benito

nombreCompleto = 'Ana'; // -> REASINAR un nuevo valor a la varible anteriormente declara
document.write('<br>' ,nombreCompleto); // Ana

// constantes

const jugadores = 'messi';
document.write("<br>", jugadores) // messi

// const jugadores = 'cristiano' -> Una constante no se puede redeclarar
// document.write(jugadores) // cristiano

jugadores = 'falcao'; // Una constante no se puede reasignar un nuevo valor
document.write(jugadores);

// ------------------------------------------------------------------------

// Una variable (var) consume muchos mas recursos que una constante (const)
// Cuando sea necesario vamos a crear variables, si no es necesario vamos a utlizar constante

