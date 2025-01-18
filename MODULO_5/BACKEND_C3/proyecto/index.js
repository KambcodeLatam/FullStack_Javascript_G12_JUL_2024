// bloqueantes vs no bloquentes

// console.log('inicio')
// setTimeout(() => console.log('Tarea Asincrona'), 2000)
// console.log('fin')


// Callback hell
// function saludo(callback){
//     console.log('hola')
//     callback()
// }
// function despedida(callback){
//     console.log("adios")
//     callback()
// }

// function conversacion(callback){
//     console.log('como esta?')
//     callback()fetch
// }
// getUser(1, (user) => {
//     getOrders(user.id, (orders) => {
//       getOrderDetails(orders[0], (details) => {
//         console.log(details);
//       });
//     });
//   });

// Promesas
// function getData(callback) {
//     setTimeout(() => callback('Informacion listo'), 3000)
// }
// getData((data) => console.log(data))

// const getDataPromise = new Promise((resolve, reject) => {
//     const exito = FontFaceSetLoadEvent
//     if(exito) {
//       resolve('funciono')
//     }else {
//         reject('no funciono')
//     }
// })
// console.log('inicio')
// fetch('https://jsonplaceholder.typicode.com/posts/1')
//   .then((response) => response.json())
//   .then((data) => console.log(data))
//   .catch((error) => console.error(error));

// console.log('fin')


// Async Await 

// const fetchData = async () => { 
//     try {
//         console.log('inicio')
//         const response = await fetch('https://jsonplaceholder.typicode.com/posts/1')
//         const data = await response.json()
//         console.log(data)
//         console.log('fin')
//     } catch (error) {
//         console.error(error)
//     }
   
// }

// fetchData()

// Event Loop
console.log('inicio') // sync
setTimeout(() => console.log('tarea setTimeout'), 0) // Callback
Promise.resolve().then(() => console.log('Microtask: promesa Resuelta')) // Promesa Resuelta
console.log('fin') // Sync

// Primera fila de ejecucion Call Stack Todo codigo sincrono
// Segunda Fila MicroTask Queue (Cola de microtareas) promesas resueltas(then, promise.resolve, catch)
// Tercera Fila Callback Queue (cola de Callbacks)

// Componentes principales del Event Loop
// Call Stack (Pila de llamadas):

// Es una estructura de datos LIFO (Last In, First Out) donde se colocan y ejecutan las funciones.
// Solo puede ejecutar una función a la vez.
// Cuando una función termina, se elimina de la pila.
// Web APIs:

// Operaciones asíncronas como setTimeout, fetch, o DOM events son delegadas aquí por el motor JavaScript (como V8 en Chrome).
// Callback Queue (Cola de tareas):

// Es una cola FIFO (First In, First Out) donde se almacenan las tareas asíncronas que están listas para ser ejecutadas.
// Microtask Queue (Cola de microtareas):

// Similar a la Callback Queue, pero con una prioridad más alta.
// Las promesas resueltas (Promise.resolve(), .then(), o catch) y las mutaciones del DOM entran aquí.
// Event Loop (Bucle de eventos):

// Monitorea continuamente la Call Stack y las colas.
// Si la Call Stack está vacía, toma la tarea más antigua de la Microtask Queue o la Callback Queue y la empuja a la Call Stack para ejecutarla.