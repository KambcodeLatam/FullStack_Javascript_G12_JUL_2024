// Scope

// En programacion o desarrollo scope (ò ambito) se refiere al contexto dentro 
// del cual se puede acceder a variables o funciones

// Global Scope: Las variables pueden ser accedidas desde cualquier
                // parte del codigo.

// Local Scope: Cuando solo puede ser accedida la variable en una parte
                // del codigo.

// Block Scope: Scope de bloque {}

// -----------------------------------------------------
// Global Scope:
// const name = 'Daniel Cañon'

// if(true){
//     document.write(name); // Daniel Cañon
// }

// --------------------------------------------------
// Local Scope:

// if(true){
//     let age = 36;
//     document.write(age); // 36
// }

// document.write(age); // age is not defined

// ---------------------------------------------------
// Block Scope

// {
//     const imc = 24
//     document.write(imc) // 24
// }

// document.write(imc) // imc is not defined

