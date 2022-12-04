const { Router } = require("express");
const router = Router();
const Database = require("better-sqlite3");
const { uuid } = require("../../utils/GenerateID");
const { getCurrentDate } = require("../../utils/Date");
const db = new Database("freelance.db", { verbose: console.log });

router.post("/", async (req, res) => {
  try {
	const {
	    JID,
	    FID,
	    YOF,
	    resumeUrl,
	    additionalInfo
	  } = req.body;
	
	  let sql = `
	  INSERT INTO application
	  VALUES (?, ?, ?, ?, ?)
	  `
	  stmt = db.prepare(sql);
	  const result = stmt.run(YOF, resumeUrl, FID, JID, additionalInfo);
	  console.log(result);
    return res.status(200).json({ msg: "successfully added application" });
} catch (error) {
	console.log(error);
  return res.status(400).json({ error: "could not application" });
}
})

module.exports = { applyRouter: router };