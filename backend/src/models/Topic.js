const db = require("../config/db");

class Topic {
  static getAll(callback) {
    db.query("SELECT * FROM topic", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }
  
  static getById(id, callback) {
    db.query("SELECT * FROM topic WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ sub_id, topic_name }, callback) {
    db.query(
      "INSERT INTO topic (sub_id, topic_name) VALUES (?, ?, ?)",
      [sub_id, topic_name],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, sub_id, topic_name });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM topic WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { sub_id, topic_name }, callback) {
    db.query(
      "UPDATE topic SET sub_id = ?, topic_name = ? WHERE id = ?",
      [sub_id, topic_name, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
  
}

module.exports = Topic;