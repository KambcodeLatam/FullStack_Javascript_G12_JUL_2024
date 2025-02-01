import express from 'express';
import { createBookFunction, deleteBookFunction, getBookByIdFunction, getBooksFunction, helloWordFunction, updateBookFunction } from './funciones/index.js';
import {logsMiddleware, validateBody} from './middlewares/index.js';
import { createRegister, login } from './funciones/register.js';
import { readFile } from 'fs/promises';

const app = express()
// habilita la propiedad res.body en todos los endpoints
app.use(express.json())
// midleware de logs 
app.use(logsMiddleware)

const isAuth = async(req, res, next) => {
    const token = req.headers.authorization?.split(' ')[1]
    if(!token) return res.status(401).json({ message: 'Unauthorized' })
    let users = await readFile('./users.json')
    users = JSON.parse(users)
    const isValidUser = users.find(user => user.tokens.includes(token))
    console.log(isValidUser)
    if(!isValidUser) return res.status(401).json({ message: 'Unauthorized' })
    
    next()
    // Bearer token 
}
// GET, POST, PUT, DELE
app.get('/', helloWordFunction)
app.get('/books', isAuth, getBooksFunction)
app.get('/books/:id', getBookByIdFunction)
app.post('/books', validateBody, createBookFunction)
app.put('/books/:id',  updateBookFunction)
app.delete('/books/:id', deleteBookFunction)

app.post('/register', createRegister)
app.post('/login', login)

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})