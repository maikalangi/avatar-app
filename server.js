const express = require('express');
const avatar = require('./models/avatar-data');
const methodOverride = require('method-override');
const morgan = require('morgan');

const app = express();

const PORT = 3000;

app.use(express.static('./public'));
app.use(express.urlencoded({ extended: false }));
app.use(methodOverride('_method'));
app.use(morgan('dev'));

app.listen(PORT, ()=>{
    console.log('express is listening on port ', PORT);
});