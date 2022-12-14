import React from "react";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Paper } from "@mui/material";
import SignIn from "./Pages/SignIn";

import Dashboard from "./Pages/Dashboard";
import NavBar from "./Pages/Navbar";

import JobPosts from "./Pages/JobPosts";
import CreateJobPost from "./Pages/CreateJobPost";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import CompanyProfile from "./Pages/CompanyProfile";
import ErrorPage from "./Pages/ErrorPage";
import Apply from "./Pages/Apply";
import BasicModal from "./Pages/Modal";
import JobPost from "./Pages/JobPost";
import Projects from "./Pages/Projects";
import Applications from "./Pages/Applications";
import Contributors from "./Pages/ProjectContributors";

function App() {
  return (
    <Router>
      <Paper sx={{ boxShadow: "none", border: "none", borderRadius: 0 }}>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Paper sx={{ boxShadow: "none", border: "none", borderRadius: 0 }}>
            <NavBar>
              <BasicModal />
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/job-posts" component={JobPosts} />
                <Route exact path="/job-posts/:jobId" component={JobPost} />
                <Route exact path="/new-job-post" component={CreateJobPost} />
                <Route exact path="/offers" component={Offers} />
                <Route exact path="/apply" component={Apply} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/projects" component={Projects} />
                <Route exact path="/company-profile" component={CompanyProfile} />
                <Route exact path="/applications" component={Applications} />
                <Route exact path="/projects/:id/contributors" component={Contributors} />
                <Route exact path='*' component ={ErrorPage} />
              </Switch>
            </NavBar>
          </Paper>
        </Switch>
      </Paper>
    </Router>
  )

}

export default App;
