const router = require('express').Router();

const { getUserById, getUsers } = require('../controllers/users');

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

module.exports = router;
