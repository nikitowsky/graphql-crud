/* eslint-disable no-underscore-dangle */
const Todo = require('../db/models/todo');

const resolvers = {
  Query: {
    todos: async () => {
      const todos = await Todo.find();
      return todos;
    },
  },
  Mutation: {
    createTodo: async (_, args) => {
      const todo = await new Todo({ ...args, complete: false }).save();
      return todo;
    },
    updateTodo: async (_, { _id, ...args }) => {
      const todo = await Todo.findOneAndUpdate({ _id }, { $set: args }, { new: true });
      return todo;
    },
    removeTodo: async (_, args) => {
      await Todo.remove(args);
      return {
        _id: args._id,
      };
    },
  },
};

module.exports = resolvers;
