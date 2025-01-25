import http from 'http';
import handleRequest from './routes/router.js';

// http: get, post, put, delete = CRUD =  Read, Create, Update, Delete

// Req = request, res = response

const server = http.createServer((req, res) => {
    handleRequest(req, res)
})

server.listen(3000, () => {
    console.log('Server is running on port 3000')
})

