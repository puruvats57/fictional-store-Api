// routes/productRoutes.js
const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');
const authenticate = require('../middleware/auth');

router.get('/', productController.getAllProducts);

//use middleware to authenticate user in order to add item
router.post('/', authenticate, productController.createProduct);

router.get('/:id', productController.getProductById);

//use middleware to authenticate user in order to update item 
router.put('/:id', authenticate, productController.updateProduct);

////use middleware to authenticate user in order to delete item 
router.delete('/:id', authenticate, productController.deleteProduct);

router.get('/search', productController.searchProducts);

module.exports = router;
