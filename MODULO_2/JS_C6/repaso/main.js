// Exercise;

// const regularPayment = Number(prompt('Escribe el valor de la cuota')); // 80
// const totalMonth = Number(prompt('Escribe la cantidad de meses que desea invertir')); // 3

// for(variable incial; condicion; contador)
// let totalPayment = 0; // 240

// for(let month = 1; month <= totalMonth; month++){
//     totalPayment = totalPayment + regularPayment // 160 + 80 = 240
//     document.write(`Mes ${month}: $ ${totalPayment} <br>`); // Mes 3: $ 240
// }

// document.write(`Fin, Total a ahorrar $ ${totalPayment} <br>`);

// ------------------------------------------------------------

// while

// const regularPayment = Number(prompt('Escribe el valor de la cuota')); // 80
// const totalMonth = Number(prompt('Escribe la cantidad de meses que desea invertir')); // 3
// let totalPayment = 0;
// let month = 1

// while(month <= totalMonth){
//     totalPayment = totalPayment + regularPayment;
//     document.write(`Mes ${month}: $ ${totalPayment} <br>`);
//     month++;
// }

// document.write(`Fin, Total a ahorrar $ ${totalPayment} <br>`);


// -----------------------------------------------------------------
// Opcional: Escribir un programa que muestre por pantalla las tablas
// de multiplicar del 1 al 10.

for(let number = 1; number <= 100; number++){
    document.write(`La tabla del ${number} <br>`)
    for(let i = 1; i <= 10; i++){
        const tableResult = i * number // 1 * 1 = 1
        document.write(`${number} X ${i} = ${tableResult} <br>`) // 3 X 1 = 3
    }
}


