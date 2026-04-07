const express = require('express')
const authMiddleware = require('../middleware/auth-middleware')
const adminMiddleware = require('../middleware/admin-middleware')
const uploadMiddleware = require('../middleware/upload-middleware')
const {uploadImage, fetchImagesController, deleteImageController } = require('../controllers/ImageController')

const router = express.Router()

//Upload the image
router.post('/upload', authMiddleware, adminMiddleware,
    uploadMiddleware.single('image'), uploadImage )
//Get all the images
router.get('/get', authMiddleware, fetchImagesController)
//Delete Image Route
router.delete('/:id', authMiddleware, adminMiddleware, deleteImageController)
module.exports = router