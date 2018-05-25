const mongoose = require('mongoose');

const todoSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  description: {
    type: String,
  },
  complete: {
    type: Boolean,
  },
});

const Todo = mongoose.model('Todo', todoSchema);

module.exports = Todo;
