const db = require("../config/db");

class ExamPaperAnswer {
  static getAll(callback) {
    db.query("SELECT * FROM exm_paper_ans", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM exm_paper_ans WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create(data, callback) {
    const { que_id, ans, posted_by } = data;
    db.query(
      "INSERT INTO exm_paper_ans (que_id, ans, posted_by) VALUES (?, ?, ?)",
      [que_id, ans, posted_by],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });
      }
    );
  }

  static updateById(id, data, callback) {
    const { que_id, ans, posted_by } = data;
    db.query(
      "UPDATE exm_paper_ans SET que_id=?, ans=?, posted_by=? WHERE id=?",
      [que_id, ans, posted_by, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM exm_paper_ans WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }
}

module.exports = ExamPaperAnswer;
