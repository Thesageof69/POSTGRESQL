require('dotenv').config();
const express = require('express');
const cookieParser = require('cookie-parser');
const path = require('path');
require('./database'); 

const userRoutes = require('./userRoutes');

const app = express();
const PORT = process.env.PORT ;

app.use(express.static(path.join(__dirname, 'public')));
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', userRoutes); 

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

module.exports = app;
