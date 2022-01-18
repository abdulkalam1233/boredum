const mongoose = require('mongoose');
const { hashPassword } = require('../../helpers/password.helper');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    index: true
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    set: hashPassword
  },
  profileImage: {
    type: String,
    default: null
  },
}, {
  strict: true,
  timestamps: true,
});

const UserModal = mongoose.model('User', UserSchema);

module.exports = {
  UserModal
};