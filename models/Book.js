const db = require("../config/db");

class Book {
  constructor(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
  }

  save() { 
    let sql = `
    INSERT INTO books(
      title,
      author,
      isbn
    )
    VALUES(
      '${this.title}',
      '${this.author}',
      '${this.isbn}'
    )
    `;

    return db.execute(sql);
  }

  static findAll() {
    let sql = "SELECT * FROM books;";

    return db.execute(sql);
  }

  static findById(id) {
    let sql = `SELECT * FROM books WHERE id = ${id};`;

    return db.execute(sql);
  }
}

module.exports = Book;
