const path = require('path');

const cardsDataPath = path.join(__dirname, '..', 'data', 'cards.json');

const { getDataFromFile } = require('../helpers/files');

const getCards = (req, res) => getDataFromFile(cardsDataPath)
  .then((cards) => res.status(200).send(cards))
  .catch((err) => res.status(500).send(err));

module.exports = { getCards };
