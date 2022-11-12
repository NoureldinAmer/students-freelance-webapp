import React, {useState, useEffect} from "react";
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

function App() {
  const [role, setRole] = useState(localStorage.getItem("role"));

  useEffect(() => {
    setRole(localStorage.getItem("role"));
  }, [])

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
                <Route exact path="/new-job-post" component={CreateJobPost} />
                <Route exact path="/offers" component={Offers} />
                <Route exact path="/apply" component={Apply} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/company-profile" component={CompanyProfile} />
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
