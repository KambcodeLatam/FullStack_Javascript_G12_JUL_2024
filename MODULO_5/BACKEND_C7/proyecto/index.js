import express from 'express';

const app = express()

// habilita la propiedad res.body en todos los endpoints
app.use(express.json())

// GET, POST, PUT, DELETE
const books = [
    {
      bookId: 1,
      author: "Perano",
      name: "The hapiness book",
      gender: "Self Care",
    },
    {
      bookId: 2,
      author: "Sultano",
      name: "The blue man",
      gender: "Fantasy",
    },
    {
      bookId: 3,
      author: "Mendano",
      name: "How to build habits",
      gender: "Self Care",
    },
    {
      bookId: 4,
      author: "Mendano",
      name: "How to be rich",
      gender: "Self Care",
    },
  ];


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/books', (req, res) => {
    // res.json(books)
    res.send({
        status: 200,
        message: 'Books fetched successfully',
        data: books
    })

})
app.get('/books/:id', (req, res) => {
    const bookId = req.params.id
    const selectedBook = books.find( (book) => book.bookId === parseInt(bookId) )
    if(!selectedBook){
        return res.status(404).send({
            status: 404,
            message: 'Book not found'
        })
    }
    res.send({
        status: 200,
        message: 'Book fetched successfully',
        data: selectedBook
    })
})
app.post('/books', (req, res) => {
    const newBook = req.body
    books.push(newBook)
    res.send({
        status: 201,
        message: 'Book added successfully',
        data: req.body
    })
})
app.put('/books/:id', (req, res) => {
    const bookId = req.params.id
    const selectedBook = books.findIndex((book) => book.bookId === parseInt(bookId))
    if(selectedBook === -1){
        return res.status(404).send({
            status: 404,
            message: 'Book not found'
        })
    }
    const updatedBook = req.body
    books[selectedBook] = updatedBook
    res.send({
        status: 200,
        message: 'Book updated successfully',
        data: req.body
    })
} )

app.delete('/books/:id', (req, res) => {
    const bookId = req.params.id
    const selectedBook = books.findIndex((book) => book.bookId === parseInt(bookId))
    if(selectedBook === -1){
        return res.status(404).send({
            status: 404,
            message: 'Book not found'
        })
    }
    books.splice(selectedBook, 1)
    res.send({
        status: 200,
        message: 'Book deleted successfully'
    })
})

app.listen(3000, () => {
    console.log('Server is running on port 3000')
})