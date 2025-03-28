const db = require("../config/db");

class Feedback {
  static getAll(callback) {
    db.query("SELECT * FROM feedback", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM feedback WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ uid, ui, content, help, dt}, callback) {
    db.query(
      "INSERT INTO feedback (uid, ui, content, help, dt) VALUES (?, ?, ?, ?, ?)",
      [uid, ui, content, help, dt],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, uid, ui, content, help, dt });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM feedback WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { uid, ui, content, help, dt }, callback) {
    db.query(
      "UPDATE feedback SET uid = ?, ui = ?, content = ?, help, dt = ?  WHERE id = ?",
      [uid, ui, content, help, dt, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
}

module.exports = Feedback;
