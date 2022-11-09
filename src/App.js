import logo from './logo.svg';
import './App.css';
import SignUp from './Pages/SignUp';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Paper } from "@mui/material";
import SignIn from './Pages/SignIn';
import Navbar from './Business/Navbar';
import Dashboard from './Business/Dashboard';


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
                {/* <Route exact path="/settings" component={Settings} />
                <Route exact path="/history" component={ChatHistory} /> */}
              </Switch>
            </Navbar>
          </Paper>
        </Switch>
      </Paper>
    </Router>
  );
}

export default App;
