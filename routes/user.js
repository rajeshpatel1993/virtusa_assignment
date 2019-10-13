const express = require('express');
const { body, check } = require('express-validator');

const usersController = require('../controllers/user');

const router = express.Router();

const isAuth = require('../middleware/is-auth');

const User = require('../models/user');


router.post('/create-user', [ check('email').isEmail()
.normalizeEmail()
.withMessage("please enter valid Email")
.custom((value,{req}) => {
    return User.findOne({ email: value }).then(userDoc => {
        if (userDoc) {
          return Promise.reject(
            'E-Mail exists already, please pick a different one.'
          );
        }
      });

}).trim(), body('firstname')
.trim()
.isLength({ min: 3 }) ], usersController.createUser);

router.get('/users',isAuth, usersController.getUsers);

router.get('/:userId',isAuth, usersController.getUser);


module.exports = router;
