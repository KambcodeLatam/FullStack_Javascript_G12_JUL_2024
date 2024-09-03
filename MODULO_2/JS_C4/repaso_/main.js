// Cree un programa que verifique si un usuario puede acceder a una pagina web. Para acceder,
//  el usuario debe ser mayor o igual de 18 años ó este debe tener una suscripcion activa, para 
//  la suscripcion puedes crear una variable que sea igual a true.

// const edad = Number(prompt('Escribe tu edad')); // 15
// const respuesta2 = 'no';
// const suscripcion = true;

// if(false || false || false || false || true) // true
// if(edad >= 18 || suscripcion){
//     document.write('Inicio de sesion exitoso')
// } else {
//     document.write('Eres menor de edad y no tienes una suscripcion activa')
// }


// ----------------------------------------------------------------------------
// Template Literals ``
// Es una nueva manera en la cual podemos escribir dentro del document.write o del 
// console.log. Es la forma en la cual podemos interpolar los diferentes tipos de datos
// y ademas las variables

const name = 'Daniel'
const alturaM = 1.85;
const peso = 59;
const imc = peso / (alturaM * alturaM); //

document.write("Hola ", name, " El IMC tuyo es: ", imc.toFixed(2), " y tu edad es: ", 35); // Hola Daniel El IMC tuyo es: 17.238860482103725
document.write(`<br>Hola ${name} el IMC tuyo es: ${imc.toFixed(2)} y tu edad es: 35`);


