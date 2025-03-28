const db = require("../config/db");

class College {
  static getAll(callback) {
    db.query("SELECT * FROM college", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM college WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ cname }, callback) {
    db.query(
      "INSERT INTO college (cname) VALUES (?)",
      [cname],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, cname });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM college WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { cname }, callback) {
    db.query(
      "UPDATE college SET cname = ? WHERE id = ?",
      [cname, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
}

module.exports = College;
