const db = require("../config/db");

class Admin {
  static getAll(callback) {
    db.query("SELECT * FROM admin", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
  static getById(id, callback) {
    db.query("SELECT * FROM admin WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ userid, password, warning_cnt }, callback) {
    db.query(
      "INSERT INTO admin (userid, password, warning_cnt) VALUES (?, ?, ?)",
      [userid, password, warning_cnt],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, userid, password, warning_cnt });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM admin WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { userid, password, warning_cnt }, callback) {
    db.query(
      "UPDATE admin SET userid = ?, password = ?, warning_cnt = ? WHERE id = ?",
      [userid, password, warning_cnt, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
  
}

module.exports = Admin;