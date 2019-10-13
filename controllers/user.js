const path = require('path');

const User = require('../models/user');


exports.getUsers = (req, res, next) => {
  User.find()
    .then(users => {
      res.render('shop/product-list', {
        prods: products,
        pageTitle: 'Products',
        path: '/products',
        currentPage: page,
        hasNextPage: ITEMS_PER_PAGE * page < totalItems,
        hasPreviousPage: page > 1,
        nextPage: page + 1,
        previousPage: page - 1,
        lastPage: Math.ceil(totalItems / ITEMS_PER_PAGE)
      });
    })
    .catch(err => {
      const error = new Error(err);
      error.httpStatusCode = 500;
      return next(error);
    });
};


exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
  .then(user=>{
    res.render('shop/product-detail',{product: product, pageTitle : product.title, path:'/products',isAuthenticated: req.session.isLoggedIn
  })
  })
  .catch(err => {
    const error = new Error(err);
    error.httpStatusCode = 500;
    return next(error);
  });
};


exports.createUser = (req, res, next) => {
  //fetch user data from body
  let {email, firstname, lastname, address} =  req.body;

  res.json(req.body);
    

//   req.user
//     .populate('cart.items.productId')
//     .execPopulate()
//     .then(user => {  
//       user.cart.items.forEach(p => {
//         totalSum += p.quantity * p.productId.price;
//       });

//       const products = user.cart.items.map(i => {
//         return { quantity: i.quantity, product: { ...i.productId._doc } };
//       });
//       const order = new Order({
//         user: {
//           email: req.user.email,
//           userId: req.user
//         },
//         products: products
//       });
//       return order.save();
//     })
//     .then(result => {
//       const charge = stripe.charges.create({
//         amount: totalSum * 100,
//         currency: 'usd',
//         description: 'Demo Order',
//         source: token,
//         metadata: { order_id: result._id.toString() }
//       });
//       return req.user.clearCart();
//     })
//     .then(() => {
//       res.redirect('/orders');
//     })
//     .catch(err => {
//       const error = new Error(err);
//       error.httpStatusCode = 500;
//       return next(error);
//     });
};

