const { config } = require("dotenv");
config();
const express = require("express");
const cors = require("cors");
const morgan = require("morgan");
const cookies = require("cors");
const { PORT, AccessControlAllowOrigin } = require("./config/");
const { 
  usersRouter, 
  loginRouter, 
  profileRouter, 
  jobPostsRouter,
  signupRouter,
  offersRouter,
  applyRouter,
  projectsRouter
} = require("./routes");
const { errorMiddleware } = require("./middlewares");
const {createTables} = require('./utils/CreateDataBase')

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// parse cookies.
app.use(cookies());
// enable cross origin request.
app.use(cors({ origin: [AccessControlAllowOrigin, 'http://164.92.114.225/'] }));
// tiny logging.
app.use(morgan("tiny"));

//This is where you should add your different endpoint handlers
app.use("/users", usersRouter);
app.use("/login", loginRouter);
app.use("/profile", profileRouter);
app.use("/job-posts", jobPostsRouter);
app.use("/signup", signupRouter);
app.use("/offers", offersRouter);
app.use("/apply", applyRouter);
app.use("/projects", projectsRouter)



//Don't remove any of these unless you have to
app.get("/version", (req, res) => res.send(process.env["npm_package_version"]));
app.use("/healthcheck", (req, res) => res.sendStatus(200)); // This is used for health check on load balancer to run task correctly
app.use(/^\/$/, (req, res) => res.sendStatus(200)); // This is used for health check on load balancer to run task correctly
app.use("*", (req, res) => res.status(404).send({ msg: "Undefined" }));
app.use(errorMiddleware);
app.listen(PORT, () => {
  console.log(`Server is running at port ${PORT}`);
  createTables();
});
