const path = require('path');

const usersDataPath = path.join(__dirname, '..', 'data', 'users.json');

const { getDataFromFile } = require('../helpers/files');

const getUsers = (req, res) => getDataFromFile(usersDataPath)
  .then((users) => {
    res.status(200).send(users);
  })
  .catch((err) => res.status(400).send(err));

const getUserById = (req, res) => getDataFromFile(usersDataPath)
  .then((users) => users.find((user) => user._id === req.params.id))
  .then((user) => {
    if (!user) {
      return res.status(404).send({ message: 'User ID not found' });
    }
    return res.status(200).send(user);
  })
  .catch((err) => res.status(400).send(err));

module.exports = { getUsers, getUserById };
