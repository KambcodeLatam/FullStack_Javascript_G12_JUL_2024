import express from 'express';
import { createBookFunction, deleteBookFunction, getBookByIdFunction, getBooksFunction, helloWordFunction, updateBookFunction } from './funciones/index.js';
import {isAuth, logsMiddleware, validateBody} from './middlewares/index.js';
import { createRegister, login } from './funciones/register.js';
import { sendMessage } from './funciones/openAi.js';
import cors from 'cors';

const app = express()
app.use(cors())

// habilita la propiedad res.body en todos los endpoints
app.use(express.json())
// midleware de logs 
app.use(logsMiddleware)


// GET, POST, PUT, DELE
app.get('/', helloWordFunction)
app.get('/books', isAuth, getBooksFunction)
app.get('/books/:id', getBookByIdFunction)
app.post('/books', validateBody, createBookFunction)
app.put('/books/:id',  updateBookFunction)
app.delete('/books/:id', deleteBookFunction)

app.post('/register', createRegister)
app.post('/login', login)

app.post('/send-messages', sendMessage)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})