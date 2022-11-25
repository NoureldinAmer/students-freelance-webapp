const { Router } = require("express");
const router = Router();
const Database = require('better-sqlite3');
const db = new Database('freelance.db', { verbose: console.log });
let sql; // for sql statements

router.post("/", async (req, res) => {
  try {
    const username = req.body.username;
    const password = req.body.password;
    //read the user email
    if (!username) {
      return res.status(400).json({ error: "Username is required" });
    }
    if (!password) {
      return res.status(400).json({ error: "Password is required" });
    }
    
    //sql query
    sql = `
      SELECT *
      FROM freelancer
      WHERE username=?
      AND password=?
    `;
    
    const stmt = db.prepare(sql);
    let results = stmt.all(username, password);
    
    if(results.length !== 0) {
      results[0].role = "freelancer";
      return res.status(200).json({
        message: "login successful",
        login_details: results[0]
      });
    } else {
      return res.status(400).json({error: "wrong credentials"});
    }
    
  } catch (err) {
    console.log(err);
    return res.status(500).json({ error: "Server Error" });
  }
});

module.exports = { loginRouter: router };
