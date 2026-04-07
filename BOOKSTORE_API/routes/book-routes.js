const express = require('express')
const {getAllBooks, getSingleBookById, addNewBook, updateSingleBook, deleteBook} = require('../controllers/book-controller')

//Create Express Router
const router = express.Router()

//All routes that are related to books only
router.get('/get',getAllBooks)
router.get('/get/:id',getSingleBookById)
router.post('/add',addNewBook)
router.put('/update/:id',updateSingleBook)
router.delete('/delete/:id',deleteBook)

module.exports = router