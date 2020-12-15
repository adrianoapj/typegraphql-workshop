import mongoose from 'mongoose';

const Schema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Categories',
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Authors',
  }
});

export default mongoose.model('Videos', Schema);