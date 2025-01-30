import express from 'express';
import { createBookFunction, deleteBookFunction, getBookByIdFunction, getBooksFunction, helloWordFunction, updateBookFunction } from './funciones/index.js';

const app = express()

// habilita la propiedad res.body en todos los endpoints
app.use(express.json())

// midleware de logs 
const logsMiddleware = (req, res, next) => {
    console.log(`Request method: ${req.method} and URL: ${req.url}`)
    next()
}
const validateBody = (req, res, next) => {
    const { bookId, name, gender, author } = req.body
    console.log(req.body)
    if(!req.body || !bookId || !name || !gender || !author) return res.status(400).send({ message: 'Body is required' })
    next()
}
app.use(logsMiddleware)

// GET, POST, PUT, DELET

app.get('/', helloWordFunction)
app.get('/books', getBooksFunction)
app.get('/books/:id', getBookByIdFunction)
app.post('/books', validateBody, createBookFunction)
app.put('/books/:id',  updateBookFunction)
app.delete('/books/:id', deleteBookFunction)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})