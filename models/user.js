const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const userSchema = new Schema({
 
  email: {
    type: String,
    required: true
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
      type: String,
      required: true
  },
  address: {
      type: String,
      required: true
  }
  
}, {timestamps:true});


module.exports = mongoose.model('User', userSchema);

