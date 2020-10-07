const { Router } = require('express');
const router = Router();
const ProductController = require('../controllers/Product')

const { authentication, authorization } = require('../middlewares/auth')

router.get('/', authentication, ProductController.getProduct)
router.post('/', authentication, ProductController.addProduct)
router.delete('/:id', authentication, authorization, ProductController.deleteProduct)
router.put('/:id', authentication, authorization, ProductController.updateProduct)

module.exports = router;