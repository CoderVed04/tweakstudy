const db = require("../config/db");

class UserAnswer {
  static getAll(callback) {
    db.query("SELECT * FROM user_ans", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
  static getById(id, callback) {
    db.query("SELECT * FROM user_ans WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ que_id, ans, date, posted_by, status }, callback) {
    db.query(
      "INSERT INTO user_ans (que_id, ans, date, posted_by, status) VALUES (?, ?, ?, ?, ?)",
      [que_id, ans, date, posted_by, status],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, que_id, ans, date, posted_by, status });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM user_ans WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { que_id, ans, date, posted_by, status }, callback) {
    db.query(
      "UPDATE user_ans SET que_id = ?, ans = ?, date = ?, posted_by = ?, status = ? WHERE id = ?",
      [que_id, ans, date, posted_by, status, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
  
}

module.exports = UserAnswer;