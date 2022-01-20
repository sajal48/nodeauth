const express = require('express');
const app = express();
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const authRoute = require('./routes/auth');

dotenv.config();

//db connect

mongoose.connect(process.env.DB_CONNECT,
() => console.log('Connected to Db')
);

//Middleware

app.use(express.json());


//Route Middleware

app.use('/api/user',authRoute);


app.listen(3000,()=>console.log('Server Up and running'));