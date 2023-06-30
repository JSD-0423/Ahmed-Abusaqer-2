const Book = require("../models/Book");
// import Joi from 'joi';
const Joi = require('joi');

const userSchema = Joi.object({
  title: Joi.string().required(),
  author: Joi.string().required(),
  isbn: Joi.number().required(),
});

/////////////////////////////////////////////////////////////////////
exports.getAllBooks = async (req, res, next) => {
  try {
    const [books, _] = await Book.findAll();

    res.status(200).json({ count: books.length, books });
  } catch (error) {
    next(error);
  }
};
/////////////////////////////////////////////////////////////////////
exports.createNewbook = async (req, res, next) => {
  try {

    const { error, value } = userSchema.validate(req.body);
    if (error) {
      res.status(400).json({ error: error.details[0].message });
      return;
    }
    const { title, author, isbn } = value;
// Perform the create operation using validated inputs



    // let { title, author, isbn } = req.body;
    let book = new Book(title, author,isbn);

    book = await book.save();

    res.status(201).json({ message: "book created" });
  } catch (error) {
    console.log("error from ahmed" + error.message)
    next(error);
  }
};
/////////////////////////////////////////////////////////////////////
exports.getbookById = async (req, res, next) => {
  try {
    let bookId = req.params.id;

    let [book, _] = await Book.findById(bookId);

    res.status(200).json({ book: book[0] });
  } catch (error) {
    next(error);
  }
};
