const express = require("express")
const routes = express.Router()

// create books dummy object
let books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
    // Add more books as needed
];


// path => http://localhost:4000/books || Get all books
routes.get("/", (req, res) => {
    // send dummy books
    res.status(200).json(books)
})


// get a single book by id
routes.get("/:id", (req, res) => {
    const id = parseInt(req.params.id)
    const book = books.find(book => book.id === id)
    // send dummy books
    if (book) {
        return res.status(200).json(book)
    } else {
        return res.status(404).json({ message: "no book found" })
    }
})


// path => http://localhost:4000/books || Create New Book
routes.post("/", (req, res) => {
    const { title, author } = req.body
    const newBook = {}
    if (title && author) {
        newBook.id = books.length + 1
        newBook.title = title;
        newBook.author = author;
    }
    if (newBook.id) {
        books.push(newBook)
    }
    // send dummy books
    res.status(200).json({ message: "new book sucessfully added" })
})


module.exports = routes