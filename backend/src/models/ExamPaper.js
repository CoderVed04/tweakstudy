const db = require("../config/db");

class ExamPaper {
  static getAll(callback) {
    db.query("SELECT * FROM exm_paper", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM exm_paper WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ name, sub_id, year, month, semester, iscomplete, university, term }, callback) {
    db.query(
      "INSERT INTO exm_paper ( name, sub_id, year, month, semester, iscomplete, university, term) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
      [ name, sub_id, year, month, semester, iscomplete, university, term],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, userid, password, warning_cnt });
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM exm_paper WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { name, sub_id, year, month, semester, iscomplete, university, term}, callback) {
    db.query(
      "UPDATE exm_paper SET name = ?, sub_id = ?, year = ?, month = ?, semester = ?, iscomplete = ?, university = ?, term = ? WHERE id = ?",
      [name, sub_id, year, month, semester, iscomplete, university, term, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
  
}

module.exports = ExamPaper;