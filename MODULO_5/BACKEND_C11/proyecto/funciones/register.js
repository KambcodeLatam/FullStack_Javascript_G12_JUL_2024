import {readFile, writeFile} from 'fs/promises'

const USERS_FILE = './users.json'


export const login = async (req, res ) => {
    const {username, password } = req.body
    let users = await readFile(USERS_FILE)
    users = JSON.parse(users)
    const user = users.findIndex((user) => {
        return user.username === username && user.password === password
    })
    if(user === -1){ 
        return res.status(401).send({message: 'Invalid credentials'})
    }
    const token = Math.random().toString(36) + Date.now()
    users[user].tokens.push(token)
    await writeFile(USERS_FILE, JSON.stringify(users))
    return res.send({
        message: 'Login successful',
        token: token
    })
}

export const createRegister = async (req, res) => {
    const {username, password} = req.body
    let users;
    try{
        users = await readFile(USERS_FILE)
        users = JSON.parse(users)
    }catch (e){
        await writeFile(USERS_FILE, JSON.stringify([]))
        users = []
    }
    const userExists = users.some((user) => {
        return user.username === username
    })
    if(userExists){
        return res.status(401).send({message: 'Username already exists'})
    }
    users.push({username, password, tokens: []})
    await writeFile('./users.json', JSON.stringify(users))
    
    res.send({
        message: 'User registered successfully',
        user: username
    }) 
}