import { readFile } from 'fs/promises';

export const logsMiddleware = (req, res, next) => {
    console.log(`Request method: ${req.method} and URL: ${req.url}`)
    next()
}
export const validateBody = (req, res, next) => {
    const { bookId, name, gender, author } = req.body
    console.log(req.body)
    if(!req.body || !bookId || !name || !gender || !author) return res.status(400).send({ message: 'Body is required' })
    next()
}

export const isAuth = async(req, res, next) => {
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