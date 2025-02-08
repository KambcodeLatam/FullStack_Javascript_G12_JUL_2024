import { readFile, writeFile } from 'fs/promises';

let books = await readFile('./db/db.json')
books = JSON.parse(books)

export const helloWordFunction = (req, res) => {
    res.send('Hello World')
}
export const getBooksFunction = async (req, res) => {

    res.send({
        status: 200,
        message: 'Books fetched successfully',
        data: books
    })

}

export const getBookByIdFunction = (req, res) => {
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
}

export const createBookFunction = async (req, res) => {
    const newBook = req.body
    books.push(newBook)
    await writeFile('./db.json', JSON.stringify(books))
    res.send({
        status: 201,
        message: 'Book added successfully',
        data: req.body
    })
}

export const updateBookFunction = async (req, res) => {
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
    await writeFile('./db.json', JSON.stringify(books))
    res.send({
        status: 200,
        message: 'Book updated successfully',
        data: req.body
    })
}

export const deleteBookFunction = async (req, res) => {
    const bookId = req.params.id
    const selectedBook = books.findIndex((book) => book.bookId === parseInt(bookId))
    if(selectedBook === -1){
        return res.status(404).send({
            status: 404,
            message: 'Book not found'
        })
    }
    books.splice(selectedBook, 1)
    await writeFile('./db.json', JSON.stringify(books))
    res.send({
        status: 200,
        message: 'Book deleted successfully'
    })
}