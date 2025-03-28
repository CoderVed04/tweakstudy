const db = require("../config/db");

class Faq {
  static getAll(callback) {
    db.query("SELECT * FROM frequently_asked", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM frequently_asked WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({que_id }, callback) {
    db.query(
      "INSERT INTO frequently_asked (que_id) VALUES (?)",
      [que_id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId,que_id});
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM frequently_asked WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { userid, password, warning_cnt }, callback) {
    db.query(
      "UPDATE frequently_asked SET que_id = ? WHERE id = ?",
      [userid, password, warning_cnt, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
  
}

module.exports = Faq;