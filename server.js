const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config()

// import routes
const user = require('./routes/user');

// app
const app = express();


// database
mongoose.connect(process.env.DATABASE, { useNewUrlParser: true, useCreateIndex: true, useUnifiedTopology: true })
    .then(() => console.log('Database connected'))

// routes
app.use('/user', user)
app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = 8000 || process.env.PORT;
app.listen(PORT, () => {
    console.log(`Example app listening on port ${PORT}!`);
});

