const db = require("../config/db");

class Message {
  static getAll(callback) {
    db.query("SELECT * FROM msg", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM msg WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ type, msg1, uid }, callback) {
    db.query(
      "INSERT INTO msg (type, msg1, uid) VALUES (?, ?, ?)",
      [type, msg1, uid],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, title, year, subject });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM msg WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { type, msg1, uid }, callback) {
    db.query(
      "UPDATE msg SET type = ?, msg1 = ?, uid = ? WHERE id = ?",
      [type, msg1, uid, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
}

module.exports = Message;
