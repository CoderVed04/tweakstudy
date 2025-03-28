const db = require("../config/db");

class Notification {
  static getAll(callback) {
    db.query("SELECT * FROM notification", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM notification WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ userid, type, reason, viewed, date }, callback) {
    db.query(
      "INSERT INTO notification (userid, type, reason, viewed, date) VALUES (?, ?, ?, ?, ?)",
      [userid, type, reason, viewed, date],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, userid, type, reason, viewed, date });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM notification WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { userid, type, reason, viewed, date }, callback) {
    db.query(
      "UPDATE notification SET userid = ?, type = ?, reason = ?, viewed = ?, date = ? WHERE id = ?",
      [userid, type, reason, viewed, date, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
}

module.exports = Notification;
