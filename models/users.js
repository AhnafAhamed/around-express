const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  about: {
    type: String,
    minlength: 2,
    maxlength: 30,
    required: true,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        return /^(http|https):\/\/[^ "]+$/g.test(v);
      },
      message: 'Invalid url',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
