// FUNCIONES
// ¿Qué es una función?
// Una función en JavaScript es un bloque de código que realiza una tarea específica.
// Puedes pensar en ella como una especie de máquina que toma algo (entradas) o no, hace algo con eso, y luego produce un resultado (salida) o no.

// ¿Por qué usar funciones?
// Las funciones nos permiten escribir código reutilizable y modular.
// En lugar de escribir el mismo código una y otra vez, podemos definir una función que realice esa tarea y simplemente llamar a esa función cuando la necesitemos.

// Sintaxis básica:
// Para definir una función en JavaScript, usamos la palabra clave function, seguida del nombre de la función y paréntesis (), donde opcionalmente podemos especificar 
// los parámetros de entrada y de salida. Después, viene un bloque de código encerrado entre llaves {} que contiene las instrucciones que queremos que la función realice.

function nombreDeLaFuncion() {
    console.log('Hello world');
}

nombreDeLaFuncion(); // Ejecucion de una funcion

// funcion con parametros
function nombreDeLaFuncionConParametros(parametro1, parametro2) {
    console.log(parametro1);
    console.log(parametro2);
}

nombreDeLaFuncionConParametros(1, 100);

// Parámetros y argumentos:
// Los parámetros son variables que se utilizan en la definición de la función para representar los valores que se pasan a la función cuando se llama.
// Los argumentos son los valores reales que se pasan a la función cuando se llama.

// Valor de retorno
// Las funciones pueden devolver un valor utilizando la palabra clave return.
// Esto es útil cuando queremos que nuestra función produzca algún resultado que podamos usar más tarde en nuestro programa.
// Cuando una funcion no retorna nada (no tiene la palabra return por ninguna parte), por defecto el valor de retorno va a ser undefined.
function sumar(numero1, numero2) {
    return numero1 + numero2;
}

const resultado = sumar(41, 78);
console.log(resultado);

const resultado2 = sumar(150, 489);
console.log(resultado2);


// Arrow functions
// Son funciones declaradas con una sintaxis mas practica para evitar escribir codigo de mas.
// Necesita ser guardada en una variable para poder ser ejecutada.
function restar(numero1, numero2) {
    return numero1 - numero2;
}

console.log(restar(45, 23));

const restarConArrow = (numero1, numero2) => numero1 - numero2;

console.log(restarConArrow(56, 47));

const mostrarObjeto = nombre => ({
    nombre: nombre,
    edad: 18
});

const objeto = mostrarObjeto('felipe');
console.log(objeto);

const objeto2 = mostrarObjeto('roberto');
console.log(objeto2);


// Funciones anónimas y expresiones de función:
// Además de las funciones con nombre que acabamos de ver, también puedes crear funciones anónimas (sin nombre).
// Las funciones anónimas deben guardarse en memoria para poder ser ejecutadas ya que no tienen un nombre o identificador definido. 
// Como la creación de una función ocurre en el contexto de una expresión de asignación, (el lado derecho de =), esto es una Expresión de función.
// Si queremos ejecutar una funcion anónima sin guardarla en memoria debemos usar las IIFE (sigla en inglés).

// Funcion anonima sin retorno
const saludar = function() {
    console.log('Hi');
}

saludar();

// Funcion anonima con retorno
const multiplicar = function(primerNumero, segundoNumero) {
    return primerNumero * segundoNumero;
}

console.log(multiplicar(14,56));

// Las expresiones de funcion ejecutadas inmediatamente (IIFE por su sigla en ingles) son funciones que se ejecutan tan pronto como se definen.
(function() {
    console.log('Saludos');
})();

(() => console.log('Saludos desde un arrow function'))();

// IIFE con retorno
const saludos = function() {
    return 'Saludos desde IIFE con retorno';
}();

console.log(saludos);

const saludos2 = (() => 'Saludos desde IIFE con retorno en arrow function')();
console.log(saludos2);


// RETO
// Mostrar el nombre y la edad de una persona usando una funcion. Si la persona es mayor de edad debe decir que
// es mayor de edad y si no menor de edad.

function mostrarInfoPersona(nombre, edad) {
    if (edad >= 18) {
        console.log(`${nombre} es mayor de edad.`);
    } else {
        console.log(`${nombre} es menor de edad.`);
    }
}

mostrarInfoPersona("Felipe", 20);
mostrarInfoPersona("Roberto", 16);

// ---------------------------------------

const mostrarPersona = (persona) => {
    if(persona.edad >= 18){ 
    console.log(`${persona.nombre} es mayor de edad`)
    } else {
    console.log(`${persona.nombre} es menor de edad`);
    };
};

const persona = {
    nombre: 'Juan',
    edad: 25
};

mostrarPersona(persona);