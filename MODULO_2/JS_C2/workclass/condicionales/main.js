// if/else -> Condicionales

// if -> Loguear login

// Como comparar variables
// Igualdad ==
// Igualdad exacta ===
// Mayor >
// Menor <
// Mayor o igual >=
// Menor o igual <=
// Diferencia !=
// Diferencia exacta !==

// Igualdad ==
// Compara los valores sin tener en cuenta los tipos de datos
// document.write("2" == "2") // -> true
// document.write("2" == 2) // -> true

// Igualdad exacta ===
// Compara los valores y los tipos de datos
// document.write("5" === "5") // -> true
// document.write("5" === 5) // -> false


// --------------------------------------------
// estructura del condicional if
// if(Condiciòn){Lo que quiero que pase si se cumple la condicion}

// Vamos a realizar un programa que le pregunte a èl usuario su edad
// y sì es mayor de edad (<18), puede ingresar a la pagina

var userAge = Number(prompt('Digita tu edad')); // 15

if(userAge > 18){
    document.write('Puedes ingresar a la pagina');
} else {
    document.write('No puedes ingresar, eres menor de edad');
}

document.write('FIN DEL PROGRAMA');