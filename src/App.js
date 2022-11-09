import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Paper } from "@mui/material";
import SignIn from './Pages/SignIn';
import Navbar from './Business/Navbar';
import Dashboard from './Business/Dashboard';
import JobPost from './Business/JobPost';
import CreateJobPost from './Business/CreateJobPost';
import Offers from './Business/Offers';
import Profile from './Business/Profile';
import Company from './Business/Company';


function App() {
  return (
    <Router>
      <Paper sx={{ boxShadow: "none", border: "none", borderRadius: 0 }}>
        <Switch>
          <Route path="/login" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Paper sx={{ boxShadow: "none", border: "none", borderRadius: 0 }}>
            <Navbar>
              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/job-posts" component={JobPost} />
                <Route exact path="/new-job-post" component={CreateJobPost} />
                <Route exact path="/offers" component={Offers} />
                <Route exact path="/profile" component={Profile} />
                <Route exact path="/company-profile" component={Company} />
              </Switch>
            </Navbar>
          </Paper>
        </Switch>
      </Paper>
    </Router>
  );
}

export default App;
