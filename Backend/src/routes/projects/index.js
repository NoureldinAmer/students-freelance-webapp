const { Router } = require("express");
const router = Router();
const Database = require("better-sqlite3");
const db = new Database("freelance.db", { verbose: console.log });

/**
 * Handle get request, queries the database to get the profile details of the
 * provided user
 * @param role - from req.params
 * @param id - from req.params
 * @returns {object} - returns user details if user exists,
 * else returns a 400 response status
 */
router.get("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    let queryResult = `
    SELECT p.ID, p.completionStatus, p.payStatus, p.startDate, p.deadline,
    b.Name AS businessName, b.Industry
    FROM project AS p, worked_on AS w, freelancer AS f, business AS b
    WHERE f.ID=w.FID AND w.PID=p.ID
    AND f.ID=?
    AND p.projectOwner = b.ID
    `
    let stmt = db.prepare(queryResult);
    const result = stmt.all(id);

    return res.status(200).json({ results: result });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server Error" });
  }
});

module.exports = { projectsRouter: router };