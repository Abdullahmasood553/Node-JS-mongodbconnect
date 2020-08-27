const express = require('express');
const mongoose = require('mongoose');
const expressLayouts = require('express-ejs-layouts');
const bodyParser = require('body-parser');

mongoose.connect('mongodb://localhost/nodekb', { useNewUrlParser: true,useUnifiedTopology: true });
let db = mongoose.connection;

// Check Connection
db.once('open', () => {
    console.log('Connected to mongodb');
});

// Check for error
db.on('error', (err) => {
    console.log(err);
})

// Init App
const app = express();

// EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');


// Body parser Middleware
app.use(bodyParser.urlencoded({ extended:false }));

// Routes
app.use('/', require('./routes/index'));
app.use('/users', require('./routes/users'));

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server started on PORT ${PORT}`));