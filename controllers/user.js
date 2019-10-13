const { validationResult } = require('express-validator');

const User = require('../models/user');


exports.getUsers = (req, res, next) => {
  User.find()
    .then(users => {
        res.status(200).json({"message":"List of users", "users":users})
    })
    .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
        next(err);
    });
};


exports.getUser = (req, res, next) => {
  const userId = req.params.userId;
  User.findById(userId)
  .then(user=>{
   res.status(200).json({"message":"User", "user":user});
  })
  .catch(err => {
        if(!err.statusCode) {
            err.statusCode = 500;
        }
       next(err);
  });
};


exports.createUser = (req, res, next) => {

  
  const errorFormatter = ({ location, msg, param, value, nestedErrors }) => {
    // Build your resulting errors however you want! String, object, whatever - it works!
    return `${location}[${param}]: ${msg}`;
  };
  const result = validationResult(req).formatWith(errorFormatter);
  if (!result.isEmpty()) {
    // Response will contain something like
    // { errors: [ "body[password]: must be at least 10 chars long" ] }
    return res.json({ errors: result.array() });
  }

  //fetch user data from body
  let {email, firstname, lastname, address} =  req.body;

  const user = new User({email,firstname,lastname,address});
  user.save().then(userdata => {
    if(userdata){
        res.status(200).json({"message":"created successfully", "userdata":userdata});
    }
  }).catch(err =>{
    if(!err.statusCode) {
        err.statusCode = 500;
    }
   next(err);
  });
};

