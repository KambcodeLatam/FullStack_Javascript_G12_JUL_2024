function mostrarDato(param) {
    //console.log(`tipo: ${typeof param} \nvalor: ${param}`);
    //console.log('---------------------');
    param();
}

//mostrarDato('texto');
//mostrarDato(100);
//mostrarDato(true);
//mostrarDato(false);
//mostrarDato(null);
//mostrarDato(undefined);
//mostrarDato(['a', 15]);
//mostrarDato({ a: 1, b: 2 });
//mostrarDato(() => console.log('this is a function'));

// Un proceso de callback require como minimo dos funciones:
// 1. La funcion que recibe ese callback como parametro conocida como funcion de alto orden -> mostrarDato
// 2. El mismo callback que se envia como parametro de la funcion de alto orden -> function() { console.log('this is a function') } / () => console.log('this is a function')

const callbackFn = function() { console.log('hello world') };
const callbackFn2 = function() { console.log('hola mundo') };

mostrarDato(callbackFn);
mostrarDato(callbackFn2);

// Practiquemos
const estudiantes = [
    {
        nombre: 'Juan',
        apellido: 'Perez',
        edad: 18
    },
    {
        nombre: 'Catalina',
        apellido: 'Jimenes',
        edad: 25
    },
    {
        nombre: 'Federico',
        apellido: 'Martinez',
        edad: 17
    },
];

const animales = ['perro', 'gato'];

// RETO
// 1. Filtrar los estudiantes mayores de edad usando el metodo filter de los arrays de js
const estudiantesMayores = estudiantes.filter(estudiante => estudiante.edad >= 18);
//console.log(estudiantesMayores);

// 2. Filtrar los estudiantes mayores de edad usando ciclos normales (for) con una funcion propia
function myFilter(list, callback) {
    const filteredArray = [];

    for (let i = 0; i < list.length; i++) {
        const element = list[i];
        const condicion = callback(element); // true o false

        if (condicion) {
            filteredArray.push(element);
        }
    }

    return filteredArray;
}

const estudiantesMayores18 = myFilter(estudiantes, estudiante => estudiante.edad >= 18);
const estudiantesMenores18 = myFilter(estudiantes, estudiante => estudiante.edad < 18);
const animalsStartsWithP = myFilter(animales, animal => animal.startsWith('p'));
const animalsStartsWithG = myFilter(animales, animal => animal.startsWith('g'));
console.log(estudiantesMayores18);
console.log(estudiantesMenores18);
console.log(animalsStartsWithP);
console.log(animalsStartsWithG);


// 2. Hacer un programa que me simule el proceso de descargar un video.
// Hay que garantizar el orden de estos pasos:
// 1. Descargar el video: 6 segundos
// 2. Procesando video: 4 segundos
// 3. Video descargado

function descargarVideo(callback) {
    console.log("Descargando video...");
    setTimeout(() => {
        callback();
    }, 6000);
}

function procesarVideo(callback) {
    console.log("Procesando video...");
    setTimeout(() => {;
        callback();
    }, 4000); 
}

function mostrarVideo() {
    console.log("Video descargado.");
    console.log('----------------------');
}

descargarVideo(() => {
    procesarVideo(() => {
        mostrarVideo();
    });
});