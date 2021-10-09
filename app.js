const express = require('express');

const { PORT = 3000 } = process.env;

const app = express();
const users = require('./routes/users');
const cards = require('./routes/cards');

app.use('/', users);
app.use('/', cards);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`)
})