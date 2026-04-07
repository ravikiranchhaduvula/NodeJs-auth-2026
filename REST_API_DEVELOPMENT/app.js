const express = require('express')
const app = express()

//Middleware
app.use(express.json())

let books = [
    {
        id:1,
        title:'Book1'
    },
    {
        id:2,
        title:'Book2'
    }
]

// Routes we will create here
//Intro Route
app.get('/', (req,res) => {
    res.json({
        message:'Welcome To our Book Store API'
    })
})
//Get All Books
app.get('/get',(req,res) => {
 res.json(books)
})

//Get Single Book
app.get('/get/:id', (req,res) => {
    const book = books.find(item => item.id ===  Number(req.params.id))
    if(book) {
        res.status(200).json(book)
    } else {
        res.status(404).json({
            message:'Please try with a different Book ID'
        })
    }
})

// Add a new Book
app.post('/add',(req,res)=> {
    const newBook = {
        id:Math.floor(Math.random() * 1000).toString(),
        title:`Book${Math.floor(Math.random() * 1000).toString()}`
    }
    books.push(newBook)
    res.status(200).json({
        data:newBook,
        message:'New Book Added Successfully'
    })
})

//Update a book
app.put('/update/:id',(req,res) => {
    const findCurrentBook = books.find(item => item.id ===  Number(req.params.id))
    if(findCurrentBook) {
        findCurrentBook.title = req.body?.title || findCurrentBook.title;
        res.status(200).json({
            message:`Book with ID ${req.params.id} updated successfully`,
            data:findCurrentBook
        })
    } else {
        res.status(404).json({
            message:'Book Not Found'
        })
    }
})

//Delete a book
app.delete('/delete/:id', (req, res) => {
    const findIndexOfCurrentBook = books.findIndex(
        item => item.id === Number(req.params.id) // ✅ convert to number
    );

    if (findIndexOfCurrentBook !== -1) {
        const deletedBook = books.splice(findIndexOfCurrentBook, 1);

        res.status(200).json({
            message: 'Book deleted successfully',
            data: deletedBook[0]
        });
    } else {
        res.status(404).json({
            message: 'Book Not Found'
        });
    }
});

const port = 3000
app.listen(port, () => {
    console.log(`Server is running on port ${port}`)
})