const db = require("../config/db");

class Favorite {
  static getAll(callback) {
    db.query("SELECT * FROM favorite", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM favorite WHERE fid = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ qid, uid, dt }, callback) {
    db.query(
      "INSERT INTO favorite (qid, uid, dt) VALUES (?, ?, ?)",
      [qid, uid, dt],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, qid, uid, dt});
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM favorite WHERE fid = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { qid, uid, dt }, callback) {
    db.query(
      "UPDATE favorite SET qid = ?, uid = ?, dt = ? WHERE id = ?",
      [qid, uid, dt, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
}

module.exports = Favorite;
