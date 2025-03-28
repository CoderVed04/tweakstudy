const db = require("../config/db");

class Subject {
  static getAll(callback) {
    db.query("SELECT * FROM subject", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM subject WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ name, sub_code, image, b_id }, callback) {
    db.query(
      "INSERT INTO subject (name, sub_code, image, b_id) VALUES (?, ?, ?, ?)",
      [name, sub_code, image, b_id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, name, sub_code, image, b_id });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM subject WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { name, sub_code, image, b_id }, callback) {
    db.query(
      "UPDATE subject SET name = ?, sub_code = ?, image = ?, b_id = ? WHERE id = ?",
      [name, sub_code, image, b_id, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
}

module.exports = Subject;
