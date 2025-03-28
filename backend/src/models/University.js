const db = require("../config/db");

class University {
  static getAll(callback) {
    db.query("SELECT * FROM university", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM university WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ abv, full_name }, callback) {
    db.query(
      "INSERT INTO university (abv, full_name) VALUES (?, ?)",
      [abv, full_name],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, title, year, subject });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM university WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { abv, full_name }, callback) {
    db.query(
      "UPDATE university SET abv = ?, full_name = ? WHERE id = ?",
      [abv, full_name, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
}

module.exports = University;
