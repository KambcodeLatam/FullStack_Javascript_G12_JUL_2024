// Crear un programa que pregunte la contraseña y si es correcta "me envie un mensaje
// de ingreso, de lo contrario enviar un mensaje de "contraeña incorrecta" 

// const contraseña = prompt('Digita la contraseña');

// if(contraseña === 'Kambcode'){
//     document.write('Ingreso de sesion exitoso');
// } else{
//     document.write('contraseña incorrecta, intenta de nuevo');
// }

// Ciclos = Es algo que se repite, si se cumple una condicion, mientras esa condicion se cumpla
// (true) el ciclo se va a ir repitiendo, nuestro ciclo se va a dejar de repetir cuando la
// condicion sea (false)

// Iteraciones = Son las veces que se repite nuestro ciclo

// Variable incial =
// Contador = 

// -----------------------------------------------------------------

// var contraseña = prompt('Digita la contraseña'); // daniel123

// while(contraseña !== 'Kambcode'){
//     console.log('Acceso Denegado')
//     contraseña = prompt('Intenta de nuevo') // andres987 -> kambcode123 -> Kambcode
// }

// document.write('BIENVENIDO A SU PAGINA')

// --------------------------------------------------------------------------------
// variable incial 
// while(condicion){Lo que queremos hacer si la condicion es true, contador}


// --------------------------------------------------------------------------------

// Exercise = Hacer un programa que imprima los numeros del 1 al 100

// var number = 1;

// while(number <= 100){ // true
//     document.write(`${number} <br>`); // 3
//     number = number + 1; // number = 3 + 1 = 4
// }

// document.write('FIN del programa')

// RETO
// Hacer un programa que cuente de 2 en 2 hasta 50
// 2
// 4
// 6
// 8
// ...
// 50

// var numero = 2;

// while(numero <= 50){
//     document.write(`${numero} <br>`);
//     numero = numero + 2;
// }

// document.write("FIN DEL PROGRAMA");
//---------------------------------------
// var numeroDos = 50;

// while(numeroDos >= 2){
//     document.write(`${numeroDos} <br>`);
//     numeroDos = numeroDos - 2;
// }


// Hacer lo mismo de forma decendente
// 50
// 48
// 46
// 44
// ...
// 2

// -------------------------------------------------------------
// Ciclo for
// for(variable incial; condicion; contador){Lo que quiero hacer}

// Exercise = Hacer un programa que imprima los numeros del 1 al 100

var number = 1;

while(number <= 100){ // true
    document.write(`${number} <br>`); // 3
    number = number + 1; // number = 3 + 1 = 4
}

// ----------------------------------------------

for(var number = 1; number <= 100; number++){
    document.write(`${number} <br>`); // template literals
}

// number = number + 1 || number++ -> Contador de uno en uno
// numero = numero + 2 || numero += 2 -> Contador resumido de diferentes valores

// ----------------------------------------------
// Hacer la tabla del 3

// 3 X 1 = 3
// Hola mundo
// Hola mundo
// Hola mundo
// 3 X 2 = 6
// Hola mundo
// Hola mundo
// Hola mundo
// 3 X 3 = 9
// Hola mundo
// Hola mundo
// Hola mundo
// 3 X 4 = 12
// Hola mundo
// Hola mundo
// Hola mundo
// .....
// 3 X 10 = 30
// Hola mundo
// Hola mundo
// Hola mundo

for(var number = 1; number <= 10; number++){
    const tableResult = 3 * number // 3 * 1 = 3
    document.write(`3 X ${number} = ${tableResult} <br>`) // 3 X 1 = 3
    var count = 1;
    while(count <= 3){
        document.write(`Hola mundo <br>`)
        count++
    }
}