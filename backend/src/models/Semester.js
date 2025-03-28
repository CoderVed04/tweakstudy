const db = require("../config/db");

class Semester {
  static getAll(callback) {
    db.query("SELECT * FROM semester", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM semester WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ sem}, callback) {
    db.query(
      "INSERT INTO semester (sem) VALUES (?)",
      [sem],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, title, year, subject });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM semester WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { sem }, callback) {
    db.query(
      "UPDATE semester SET sem = ? WHERE id = ?",
      [sem, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
}

module.exports = Semester;
