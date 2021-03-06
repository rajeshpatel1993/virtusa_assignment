//import required packages
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const express = require('express');
const app = express();

//import config
const config = require("./config/config");


const DEV_DB_PORT = config['db'].port;
const APP_PORT = config['app'].port;

//mongodb connection URI
const MONGODB_URI = "mongodb://mongo:27017/virtusa_assignment";

//import user routes
const userRoutes = require('./routes/user');

//use bodyparser and json for extract information
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

//user routes
app.use('/user', userRoutes);

//global error handler
app.use((error, req, res, next) => {
    console.log(error);
    const status = error.statusCode || 500;
    const message = error.message;
    res.status(status).json({ message: message });
});


//connect mongodb and listen to the server
mongoose.connect(MONGODB_URI).
then(result => {
    app.listen(APP_PORT,()=>{
		console.log(`listening to port ${APP_PORT}`);
	});
}).catch(e => console.log(e))