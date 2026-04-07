const Book = require('../models/book')

const getAllBooks = async (req,res) => {
 try {
    const allBooks = await Book.find({})
    if(allBooks?.length > 0) {
        res.status(200).json({
            success:true,
            message:'List of books fetched successfully',
            data:allBooks
        })
    } else {
        res.status(400).json({
            success:false,
            message:'No Books Found in collection',
        })
    }
 } catch(e) {
    console.error("Exception", e)
    res.status(500).json({
            success:false,
            message:'Something went wrong please try again',
    })
 }
}

const getSingleBookById = async (req,res) => {
    try {
        const getCurrentBookID = req.params.id
        const bookDetailsByID = await Book.findById(getCurrentBookID)

        if(!bookDetailsByID) {
            return res.status(404).json({
                success:false,
                message:'Book with the current ID is not found, please try with a different ID'
            })
        } else {
            res.status(200).json({
                success:true,
                data:bookDetailsByID
            })
        }
    } catch(e) {
        console.error("Exception", e)
        res.status(500).json({
        success:false,
        message:'Something went wrong please try again',
    })
    }
}

const addNewBook = async (req,res) => {
 try {
   const newBookFormData = req.body
   const newlyCreatedBook = await Book.create(newBookFormData)
   if(newlyCreatedBook) {
    res.status(201).json({
        success:true,
        message:'Book added successfully',
        data:newlyCreatedBook
    })
   }
 } catch(e) {
  log.error("Error", e)
 }
}


const updateSingleBook = async (req, res) => {
  try {
    const updatedBookFormData = req.body
    const getCurrentBookID = req.params.id

    const updatedBook = await Book.findByIdAndUpdate(
      getCurrentBookID,           // ID
      updatedBookFormData,        // update data
      { new: true }               // return updated doc
    )

    if (!updatedBook) {
      return res.status(404).json({
        success: false,
        message: 'Book is not found with this ID'
      })
    }

    res.status(200).json({
      success: true,
      data: updatedBook
    })

  } catch (e) {
    console.error("Exception", e)
    res.status(500).json({
      success: false,
      message: 'Something went wrong please try again',
    })
  }
}

const deleteBook = async (req,res) => {
 try {
      const getCurrentBookID = req.params.id
      const deletedBook = await Book.findByIdAndDelete(getCurrentBookID)
      if(!deletedBook) {
        res.status(404).json({
            success:false,
            message:'Book is not found with this ID'
        })
      } else {
        res.status(200).json({
            success:true,
            data: deletedBook
        })
      }
 } catch(e) {
    console.error("Exception", e)
        res.status(500).json({
        success:false,
        message:'Something went wrong please try again',
    })
 }
}

module.exports = {getAllBooks, getSingleBookById, addNewBook, updateSingleBook, deleteBook}