const db = require("../config/db");

class UserComment {
  static getAll(callback) {
    db.query("SELECT * FROM user_comment", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
  static getById(id, callback) {
    db.query("SELECT * FROM user_comment WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ paper_id, topic_id, que_id, date, comment, posted_by, status}, callback) {
    db.query(
      "INSERT INTO user_comment (paper_id, topic_id, que_id, date, comment, posted_by, status) VALUES (?, ?, ?, ?, ?, ?, ?)",
      [ paper_id, topic_id, que_id, date, comment, posted_by, status],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, paper_id, topic_id, que_id, date, comment, posted_by, status});
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM user_comment WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { paper_id, topic_id, que_id, date, comment, posted_by, status }, callback) {
    db.query(
      "UPDATE user_comment SET paper_id = ?, topic_id = ?, que_id = ?, date = ?, comment = ?, posted_by = ?, status = ? WHERE id = ?",
      [ paper_id, topic_id, que_id, date, comment, posted_by, status, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
  
}

module.exports = UserComment;