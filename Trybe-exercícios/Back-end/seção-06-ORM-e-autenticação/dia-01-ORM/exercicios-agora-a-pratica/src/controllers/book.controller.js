// src/controllers/book.controller.js

const BooksService = require('../services/book.service');

const getAll = async (req, res) => {
  const { q } = req.query;
  if (q) {
    try {
      const { q } = req.query;
      const booksByAuthor = await BooksService.getByAuthor(q);
      return res.status(200).json(booksByAuthor);
    } catch (e) {
      console.log(e.message);
      res.status(404).json({ message: 'Author not found' });
    }
  } else {
    try {
      const books = await BooksService.getAll();
      return res.status(200).json(books);
    } catch (e) {
      console.log(e.message);
      res.status(500).json({ message: 'Ocorreu um erro' });
    }
  }
};

const getById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await BooksService.getById(id);
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: 'Book not found' });
  }
};

const createBook = async (req, res) => {
  try {
    const newBookObj = req.body;
    const book = await BooksService.createBook(newBookObj);
    return res.status(200).json(book);
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Ocorreu um erro' });
  }
};

const updateBook = async (req, res) => {
  try {
    const updateBookObj = req.body;
    const { id } = req.params; 
    await BooksService.updateBook(id, updateBookObj);
    
    return res.status(200).json({ message: `Book ${updateBookObj.title} updated!`});
  } catch (e) {
    console.log(e.message);
    res.status(404).json({ message: 'Book not found' });
  }
};

const removeBook = async (req, res) => {
  try {
    const { id } = req.params;
    const removedBook = await BooksService.getById(id);
    await BooksService.removeBook(id);

    return res.status(200).json({ message: `Book ${removedBook.title} removed!`});
  } catch (e) {
    console.log(e.message);
    res.status(500).json({ message: 'Algo deu errado' });   
  }
};

module.exports = {
  getAll,
  getById,
  createBook,
  updateBook,
  removeBook
};