// Como redondear o controlar los decimales de un numero con .toFixed()

var age = 58;
var middleAge = age / 3
// Primera forma
// document.write('La tercera parte de tu edad es: ', middleAge.toFixed(2));
// Segunda manera (crear otra variable que almacene el numero redondeado)
// document.write('La tercera parte de tu edad es: ', middleAgeRounder);

// ----------------------------------------------------------
// Cohersion de datos // concatenacion
// Nombre de usario = Kambcode Latam
var fullName = "kambcode " + "Latam"
// document.write(fullName);
var year = "20" + "24"
// document.write(year);
var year2 = 20 + 24
// document.write("<br>", year2);
var year3 = "20" + 24 // -> "20" + "24" = 2024 
// document.write("<br>", year3); // 2024

// -----------------------------------------------------------
// Como convertir una cadena a numero -> Number()
var userAge = Number(prompt('Escribe tu edad')); // 55
var userAgePlusTen = userAge + 10
document.write("Tu edad dentro de 10 años sera: ", userAgePlusTen); // 65

// otra manera pero menos eficiente
var userAge = prompt('Escribe tu edad'); // "55"
var userAgeNumber = Number(userAge);
var userAgePlusTen = userAgeNumber + 10
document.write("Tu edad dentro de 10 años sera: ", userAgePlusTen); // 65