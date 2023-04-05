// src/services/user.service.js

const { Book } = require('../models');

const getAll = async () => {
  const books = await Book.findAll({
    order: [['title']]
  });

  return books;
};

const getById = async (id) => {
  const book = await Book.findByPk(id);

  return book;
};

const getByAuthor = async (author) => {
  const booksByAuthor = await Book.findAll({
    where: {
      author
    },
    order: [['title']]
  });

  return booksByAuthor;
};

const createBook = async (newBookObj) => {
  const newBook = await Book.create(newBookObj);

  return newBook;
};

const updateBook = async (id, updateBookObj) => {
  const updatedBook = await Book.update(updateBookObj, { where: {
    id
  }});

  return updatedBook;
};

const removeBook = async (id) => {
  const bookToRemove = await Book.findByPk(id);
  console.log(bookToRemove);
  if (bookToRemove) {
    await Book.destroy({
      where: {
        id
      }
    });
    return true    
  }
  return false
};

module.exports = {
  getAll,
  getById,
  getByAuthor,
  createBook,
  updateBook,
  removeBook
};