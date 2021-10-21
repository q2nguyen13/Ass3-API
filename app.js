const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv/config');


//Middlewares
app.use(cors());
app.use(bodyParser.json());



//Routes
app.get('/', (req, res) => {
    res.send('Welcome to Nguyen home');
})

//Import Routes
const postsRoute = require('./routes/posts');

app.use('/posts', postsRoute);

//Connect to DB
mongoose.connect(
    process.env.DB_CONNECTION, 
    { useNewUrlParser:true },
    () => console.log('connect to DB!')
);

//How do we start listening to the server
app.listen(3000);