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
 router.get("/:role/:id", async (req, res) => {
  try {
	  const { role } = req.params;
	  const { id } = req.params;
	  let queryResult;
	
	  if (role === "freelancer") {
	    //queryResult = queryFreelancer(id);
	  } else if ((role === "business")){
	    queryResult = queryHiringManager(id);
	  } else {
      return res.status(404).json({ error: "incorrect role was provided" });
    }
	  return res.status(200).json({results: queryResult});
} catch (error) {
  console.log(error);
	return res.status(500).json({ error: "Server Error" });
}
});

router.get("/:jobID", async(req, res) => {
  try {
	  const { jobID } = req.params;
    let sql = `
    SELECT f.FirstName || ' ' || f.LastName AS name, 
    f.Email AS email, a.YearsOfExperience, f.Location AS location,
    f.PhoneNo, A.ApplicantURL AS url
    FROM application AS a, freelancer AS f
    WHERE JID=?
    AND FID=f.ID
    `

    let stmt = db.prepare(sql);
    const queryResult = stmt.all(jobID);
	
	  return res.status(200).json({results: queryResult});
} catch (error) {
  console.log(error);
	return res.status(500).json({ error: "Server Error" });
}
});

/**
 * perform sql query to get the profile details of the freelancer
 * @param {string} id - id of freelancer
 * @returns {object} -returns result of sql query
 */
//  function queryFreelancer(id) {
//   let sql = null; // for sql statements
  
//   //sql query
//   sql = `
//     SELECT *
//     FROM freelancer
//     WHERE ID=?
//   `;

//   let stmt = db.prepare(sql);
//   const result = stmt.all(id);
//   return result;
// }

/**
 * perform sql query to get the profile details of the hiring manager and 
 * the company details, the hiring manager works for
 * @param {string} id - id of hiring manager
 * @returns {object} - return result of sql query
 */
 function queryHiringManager(id) {
  let sql; // for sql statements
  
  //sql query
  sql = `
    SELECT Duration, WorkingHours, 
    Salary, Description, JobName, j.ID, 
    DatePosted, Industry, JobPostOwner
    FROM job_post AS j, hiring_manager AS h
    WHERE h.ID=?
    AND h.worksFor = j.JobPostOwner
  `;

  let stmt = db.prepare(sql);
  const result = stmt.all(id);
  return result;
}


module.exports = { jobPostsRouter: router };