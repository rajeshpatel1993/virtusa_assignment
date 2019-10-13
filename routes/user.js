const express = require('express');

const usersController = require('../controllers/user');

const router = express.Router();

// const isAuth = require('../middleware/is-auth');


router.post('/create-user', usersController.createUser);

// router.get('/products', shopController.getProducts);


// router.get('/products/:productId', shopController.getProduct);

// router.get('/cart', isAuth, shopController.getCart);

// router.post('/cart-delete-item',isAuth, shopController.postCartDeleteProduct);


// router.post('/cart', isAuth,shopController.postCart);

// router.get('/orders', isAuth, shopController.getOrders);

// router.get('/orders/:orderId', isAuth, shopController.getInvoice);

// router.get('/checkout', isAuth, shopController.getCheckout);

module.exports = router;
