const db = require("../config/db");

class Branch {
  static getAll(callback) {
    db.query("SELECT * FROM branch", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM branch WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ b_name, uni_id}, callback) {
    db.query(
      "INSERT INTO branch (b_name, uni_id) VALUES (?, ?)",
      [b_name, uni_id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, b_name, uni_id });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM branch WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { b_name, uni_id }, callback) {
      db.query(
        "UPDATE branch SET b_name = ?, uni_id = ? WHERE id = ?",
        [b_name, uni_id, id],
        (err, results) => {
          if (err) return callback(err, null);
          callback(null, results.affectedRows > 0);
        }
      );
    }
}

module.exports = Branch;
