// import { readFile, appendFile, open, writeFile, unlink } from 'fs'

// Crear, Leer, Actualizar y borrar archivos

// CRUD = Create, Read, Update, Delete

// Borrar Archivos

// unlink('./text2.txt', (error) => {
//     if(error) {
//         console.log(error)
//         return
//     }
//     console.log('Archivo borrado')
// })



// Actualizar Archivos

// writeFile('./text4.txt', 'esto es una clase', (error) => {
//     if(error) {
//         console.log(error)
//         return
//     }
//     console.log('Archivo creado')
// })

// appendFile('./text2.txt', ', Hola 3', (error) => {
//     if(error) {
//         console.log(error)
//         return
//     }
//     console.log('Archivo creado')
// })

// Crear Archivos

// writeFile('./text4.txt', 'hola Mundo', (error) => {
//     if(error) {
//         console.log(error)
//         return
//     }
//     console.log('Archivo creado')
// })


// open('./text3.txt', 'w', (error) => {
//     if(error) {
//         console.log(error)
//         return
//     }
//     console.log('Archivo creado')
// })

// appendFile('./text2.txt', 'Hola Mundo', (error) => {
//     if(error) {
//         console.log(error)
//         return
//     }
//     console.log('Archivo creado')
// })

// leer archivos
// readFile('./text.txt', (error, data) => {
//     if(error) {
//         console.log(error)
//         return
//     }
//     console.log(data.toString())
// })



// import { createReadStream } from  'fs'

// const readStream = createReadStream('./text.txt')

// readStream.on('readable', () => {
//     setTimeout(() => {
//         const data = readStream.read(30)
//         console.log(data.toString())
//     }, 1000)
// })



// readStream.on('data', (chunk) => {
//     console.log(chunk.toString())
// })

// readStream.on('open', () => {
//     console.log('Archivo abierto')
// })
// readStream.on('end', () => {
//     console.log('Archivo Leido por completo')
// })


