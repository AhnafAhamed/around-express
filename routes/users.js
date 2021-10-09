const router = require('express').Router();

const {getUserById, getUsers } = require("../controllers/users");

router.get('/users', getUsers);

router.get('/users/:id', getUserById);

router.get('*', (req,res) => {
  res.send({ "message": "Requested resource not found" })
})


module.exports = router;