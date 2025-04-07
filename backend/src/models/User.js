const db = require("../config/db");
const bcrypt = require("bcryptjs");

class User {
  static register(data, callback) {
    const { fname, lname, dob, email, clg_name, contact_no, userid, password, gender, image } = data;

    bcrypt.hash(password, 10, (err, hashedPassword) => {
      if (err) return callback(err, null);

      db.query(
        "INSERT INTO reg (fname, lname, dob, email, clg_name, contact_no, userid, password, gender, image) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?)",
        [fname, lname, dob, email, clg_name, contact_no, userid, hashedPassword, gender, image],
        (err, results) => {
          if (err) return callback(err, null);
          callback(null, { id: results.insertId, userid, email });
        }
      );
    });
  }

  static findByUsername(userid, callback) {
    db.query("SELECT * FROM reg WHERE userid = ?", [userid], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }
}

module.exports = User;
