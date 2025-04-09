const db = require("../config/db");
const bcrypt = require("bcryptjs");

class AdminAuth {

  static findByAdminname(userid, callback) {
    db.query("SELECT * FROM admin WHERE userid = ?", [userid], (err, results) => {
      if (err) return callback(err, null);
      callback(null, results[0]);
    });
  }
}

module.exports = AdminAuth;
