// VAR vs LET vs CONST

/* VAR */
var edad = 18;
edad = 20;
edad = 5;

var edad = 15;
console.log(edad);

var color;
console.log(color); // undefined


/* LET */
let ciudad = 'Bogota';
ciudad = 'Medellin';

console.log(ciudad);

// let ciudad = 'Lima'; -> Muestra un error porque ya esta declarada la variable ciudad

let ciudadano;
console.log(ciudadano); // undefined

let animales = ['perro', 'gato'];
animales = [];
animales.push('tortuga');

console.log(animales);


/* CONST */
const nombre = 'Sergio';
// nombre = 'Luis'; -> Lanza un error porque una constante no se puede reasignar
//const nombre = 'Pedro'; -> Muestra un error porque ya esta declarada la variable nombre

console.log(nombre);

const mascotas = ['perro', 'gato'];
// mascotas = []; -> Lanza un error porque una constante no se puede reasignar
mascotas.push('tortuga');
console.log(mascotas);

//const pais; -> Lanza un error porque una constante debe estar inicializada con un valor ya que despues no se puede cambiar
//console.log(pais);

/*
    VAR
    - Re asignar: Sí
    - Re declarar: Sí
    - Declarar sin valor inicial: Sí
    - Scope: Función
    - Hoisting: undefined


    LET
    - Re asignar: Sí
    - Re declarar: No
    - Declarar sin valor inicial: Sí
    - Scope: Bloque
    - Hoisting: TDZ (zona de muerte temporal)


    CONST
    - Re asignar: No
    - Re declarar: No
    - Declarar sin valor inicial: No
    - Scope: Bloque
    - Hoisting: TDZ (zona de muerte temporal)
*/

// Hoisting
console.log(something);
var something = 'sdfdsf';
console.log(something);

//console.log(somethingLet); -> Cannot access 'somethingLet' before initialization
let somethingLet = 'dsffdgdfg';
console.log(somethingLet);

//console.log(somethingConst); -> Cannot access 'somethingConst' before initialization
const somethingConst = 'dsffdgdfg';
console.log(somethingConst);


// SCOPE
// El "scope" en JavaScript se refiere al alcance de una variable, es decir, dónde en tu código puedes usar y acceder a esa variable.
// Imagina que tienes un montón de cajas una dentro de otra, cada una con un nombre escrito en ella.
// El "scope" sería como el lugar donde puedes ver y usar esas cajas.
// En Js los scopes se determinan por las llaves { } (Scope de bloque) o por funciones (Scope de funcion).
// Todos parten de un scope global (donde se empieza a ejecutar un programa)
// Las variables definidas dentro de una función sólo son accesibles dentro de esa función, a menos que sean variables globales (estan fuera de la funcion).
// Nota: La clave para entender scopes tanto de bloque como de funcion es preguntar dónde y cómo estoy usando una variable y cómo la estoy declarando (let, const o var)

// Scope de bloque
// Javascript cuando se encuentra con multiples scopes anidados, verifica las variables de adentro hacia afuera
// Si no existe una variable en el scope mas interno (inner scope) la buscará en el scope mas externo (outer scope)
let objeto = 'Computador';
console.log('objeto scope global: ', objeto);

if (true) {
    console.log('objeto dentro del if: ', objeto);
}

if (true) {
    if (true) {
        console.log('objeto dentro del if anidado: ', objeto);
    }
}


let fruta = 'Fresa';
var fruta2 = 'Mora';

if (true) {
    let fruta = 'Mango';
    console.log(fruta); // Mango
    console.log(fruta2); // Limon
}

console.log(fruta); // Fresa
console.log(fruta2); // Limon

let estudianteX = 'Roberto';
// Scope de funcion
function doSomething() { // ----------- es como si hubiera un muro
    var estudiante = 'Felipe';
    let estudiante2 = 'Luis';
    var estudiante3 = 'Eliana';

    if (true) {
        if (true) {
            if (true) {
                if (true) { // ------ para las variables let y const el scobe de bloque es su muro
                    console.log(estudiante);
                    console.log(estudiante2);
                    console.log(estudianteX);
                    
                    let estudianteY = 'Gabriel';
                }
            }
        }
        console.log(estudiante3);
        // console.log(estudianteY); -> estudianteY is not defined
    }

    console.log('estudiante2: ', estudiante2);
    console.log('estudiante: ', estudiante);
    console.log('estudiante3: ', estudiante3);
    // console.log('estudianteY: ', estudianteY); -> estudianteY is not defined
}

doSomething();