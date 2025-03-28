const db = require("../config/db");

class ExamPaperQuestion {
  static getAll(callback) {
    db.query("SELECT * FROM exm_paper_que", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM exm_paper_que WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create(data, callback) {
    const { paper_id, question, subject, topic, que_no, sub_que, marks, optional, main_que_optional } = data;
    db.query(
      "INSERT INTO exm_paper_que (paper_id, question, subject, topic, que_no, sub_que, marks, optional, main_que_optional) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)",
      [paper_id, question, subject, topic, que_no, sub_que, marks, optional, main_que_optional],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, ...data });
      }
    );
  }

  static updateById(id, data, callback) {
    const { paper_id, question, subject, topic, que_no, sub_que, marks, optional, main_que_optional } = data;
    db.query(
      "UPDATE exm_paper_que SET paper_id=?, question=?, subject=?, topic=?, que_no=?, sub_que=?, marks=?, optional=?, main_que_optional=? WHERE id=?",
      [paper_id, question, subject, topic, que_no, sub_que, marks, optional, main_que_optional, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM exm_paper_que WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }
}

module.exports = ExamPaperQuestion;
