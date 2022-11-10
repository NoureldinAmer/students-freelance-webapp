import logo from "./logo.svg";
import "./App.css";
import SignUp from "./Pages/SignUp";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Paper } from "@mui/material";
import SignIn from "./Pages/SignIn";
import BusinessNavbar from "./Pages/Business/Navbar";
import BusinessDashboard from "./Pages/Business/Dashboard";
import JobPost from "./Pages/Business/JobPost";


import BusinessProfile from "./Pages/Business/Profile";
import Company from "./Pages/Business/Company";

import Dashboard from "./Pages/Dashboard";
import NavBar from "./Pages/Navbar";
import { useState } from "react";
import { useEffect } from "react";
import JobPosts from "./Pages/JobPosts";
import CreateJobPost from "./Pages/CreateJobPost";
import Offers from "./Pages/Offers";
import Profile from "./Pages/Profile";
import CompanyProfile from "./Pages/CompanyProfile";

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
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/job-posts" component={JobPosts} />
                <Route exact path="/new-job-post" component={CreateJobPost} />
                <Route exact path="/offers" component={Offers} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/company-profile" component={CompanyProfile} />
              </Switch>
            </NavBar>
          </Paper>
        </Switch>
      </Paper>
    </Router>
  )

}

export default App;
