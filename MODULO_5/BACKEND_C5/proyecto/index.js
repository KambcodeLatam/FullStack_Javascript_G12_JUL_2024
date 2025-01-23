// import http from 'http';
// import 'dotenv/config'

// const PORT = process.env.PORT

// const server = http.createServer((req, res) => {
//     res.statusCode = 200;
//     res.setHeader('Content-Type', 'text/plain');
//     res.end('Hello World 2!\n');
// })

// server.listen(PORT, () => {
//     console.log(`Estamos escuchando por el puerto ${PORT}`)
// })

// req, res = request y response
// http 
// verbos http (get, post, put, delete)
// Crud Post = Create, get = Read, Put = update, delete = Delete

const datos = process.argv.slice(2)

if(datos.length < 2){
    console.log('Uso: node index.js nombre idioma')
    console.log('Ejemplo: node index.js Juan es')
    process.exit(1)
}
//const nombre =  datos[0] 
//const idioma = datos[1]

const [nombre, idioma] = datos

const obtenerSaludo = (nombre, idioma) => {
    switch(idioma){
        case 'es':
            return `Hola!, ${nombre}, como estas?`
        case 'en':
            return `Hello!, ${nombre}, how are you?`
        case 'fr':
            return `Bonjour!, ${nombre}, comment allez-vous?`
        default: 
           return `Hola!, ${nombre}, no entiendo el idioma.`
        }
}
const saludo = obtenerSaludo(nombre, idioma)
console.log(saludo)


// [0, 1, 2, 3]


