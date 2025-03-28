const db = require("../config/db");

class Paper {
  static getAll(callback) {
    db.query("SELECT * FROM papers", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM papers WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ title, year, subject }, callback) {
    db.query(
      "INSERT INTO papers (title, year, subject) VALUES (?, ?, ?)",
      [title, year, subject],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, title, year, subject });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM papers WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }
}

module.exports = Paper;
