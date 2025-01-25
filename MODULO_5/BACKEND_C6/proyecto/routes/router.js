const handleRequest = async (req, res) => {
    const {url, method} = req
    const libros = [
        {id: '1', title: 'Libro 1', author: 'Autor 1'},
        {id: '2', title: 'Libro 2', author: 'Autor 2'},
        {id: '3', title: 'Libro 3', author: 'Autor 3'}
    ]

    req.on('data', (chunk) => {
        console.log(chunk.toString())
    })

    req.on('end', () => {
        console.log(url.split('/'))
        const path = url.split('/')[1]
        // /libros/1
        // ['',  'libros',  '1']
        // [0       1        2]

        const id = url.split('/')[2]
        try {
            if(path === 'libros'){
                if(method === 'GET' && !id){
                    res.writeHead(200)
                    res.end(JSON.stringify(libros))
                }
                if(method === 'GET' && id){
                    res.writeHead(200)
                    const libroSeleccionado = libros.find((libro) => {
                        return libro.id === id
                    })
                    res.end(JSON.stringify(libroSeleccionado))
                }
                if(method === 'POST'){
                    res.writeHead(201, {'Content-Type': 'text/plain'})
                    res.end('Libro creado')
                }
                if(method === 'PUT'){
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.end('Libro actualizado')
                }
                if(method === 'DELETE'){
                    res.writeHead(200, {'Content-Type': 'text/plain'})
                    res.end('Libro eliminado')
                }
            } else if(path === 'calzado'){
                res.writeHead(200, {'Content-Type': 'text/plain'})
                res.end('calzado')
            }else {
                res.writeHead(404)
                res.end('No encontramos esa ruta') 
            }
           
        } catch (error) {
            console.log(error)
            res.writeHead(500)
            res.end('No encontramos esa ruta') 
        }
        

    })
}

export default handleRequest;