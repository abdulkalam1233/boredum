const mongoose = require('mongoose');
const { UserModal } = require('./user.model');

const PostSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Types.ObjectId,
    required: true,
    ref: UserModal,
    index: true,
    // select: true
  },
  text: {
    type: String,
    required: true,
  },
  media: {
    type: Array
  },
  hashTags: {
    type: Array,
    text: true,
    index: true,
    sparse: true
  },
  likes: {
    type: Number,
    default: 0,
  },
  dislikes: {
    type: Number,
    default: 0,
  }
}, {
  strict: true,
  timestamps: true
});

const PostModel = mongoose.model('Post', PostSchema);

module.exports = {
  PostModel
};