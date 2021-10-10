const express = require('express');
const router = require('express').Router();

const { PORT = 3000 } = process.env;

const app = express();
const users = require('./routes/users');
const cards = require('./routes/cards');

app.use('/', users);
app.use('/', cards);
app.use((req, res) => {
  res.status(404).send({ message: 'Requested resource not found' });
});

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}...`);
});

module.exports = router;
