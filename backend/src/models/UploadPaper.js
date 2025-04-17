const db = require("../config/db");

class UploadPaper {
  static getAll(callback) {
    db.query("SELECT * FROM upload_paper", (err, results) => {
      if (err) return callback(err, null);
      callback(null, results);
    });
  }

  static getById(id, callback) {
    db.query("SELECT * FROM upload_paper WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }

  static create({ exm_paper_id, link }, callback) {
    db.query(
      "INSERT INTO upload_paper ( exm_paper_id, link) VALUES (?, ?)",
      [ exm_paper_id, link], 
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, { id: results.insertId, exm_paper_id, link});
      }
    );
  }

  static deleteById(id, callback) {
    db.query("DELETE FROM upload_paper WHERE id = ?", [id], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results.affectedRows > 0);
    });
  }

  static updateById(id, { exm_paper_id, link}, callback) {
    db.query(
      "UPDATE upload_paper SET exm_paper_id = ?, link = ? WHERE id = ?",
      [ exm_paper_id, link, id],
      (err, results) => {
        if (err) return callback(err, null);
        callback(null, results.affectedRows > 0);
      }
    );
  }
  
}

module.exports = UploadPaper;