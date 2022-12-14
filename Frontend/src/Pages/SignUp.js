import React, { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import {
  FormControl,
  InputLabel,
  MenuItem,
  FormHelperText,
  Select,
  Alert,
} from "@mui/material";
import { useHistory } from "react-router-dom";

function Copyright(props) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="https://github.com/NoureldinAmer">
        Nour Amer
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const theme = createTheme();

export default function SignUp() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [role, setRole] = useState("");
  const [errorLabel, setErrorLabel] = useState(false);
  const history = useHistory();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const formInput = role === "freelance" ? {
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      username: data.get("username"),
      password: data.get("password"),
      role: data.get("role"),
      phoneNumber: data.get("phoneNumber"),
      location: data.get("location"),
    } :{
      firstName: data.get("firstName"),
      lastName: data.get("lastName"),
      email: data.get("email"),
      username: data.get("username"),
      password: data.get("password"),
      role: data.get("role"),
      businessName: data.get("businessName"),
      businessIndustry: data.get("businessIndustry"),
    };

    console.log(formInput);
    localStorage.setItem("role", formInput.role);
    const raw = JSON.stringify(formInput);
    let myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");
    let requestOptions = {
			url: "http://localhost:3000/signup",
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    const response = await fetch("http://localhost:3000/signup" , requestOptions);
    
    if(response.status === 200) {
      const result = await response.json();
      console.log(result.userID);
      localStorage.setItem("userID" , result.userID);
      history.push("/");
    } else {
      console.log(response.error);
      setErrorLabel(true);
    }
  };

  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Alert severity="error" sx={{ display: errorLabel ? "" : "none"}}>Username or Email already exist use different username and/or email</Alert>
          <Avatar
            sx={{
              m: 1,
              width: "75px",
              height: "75px",
            }}
          >
            <img
              src={`https://avatars.dicebear.com/api/initials/${firstName} ${lastName}.svg?scale=110`}
              alt="initials"
            />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate="false"
            onSubmit={handleSubmit}
            sx={{ mt: 3 }}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  onChange={(e) => setFirstName(e.target.value)}
                  onFocus={() => setErrorLabel(false)}
                />
              </Grid>

              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={(e) => setLastName(e.target.value)}
                  onFocus={() => setErrorLabel(false)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onFocus={() => setErrorLabel(false)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="username"
                  label="Username"
                  name="username"
                  autoComplete="username"
                  onFocus={() => setErrorLabel(false)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  onFocus={() => setErrorLabel(false)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl sx={{ minWidth: 120, width: "100%" }}>
                  <InputLabel id="demo-simple-select-helper-label">
                    Role
                  </InputLabel>
                  <Select
                    labelId="demo-simple-select-helper-label"
                    id="demo-simple-select-helper"
                    value={role}
                    label="Role"
                    onChange={handleChange}
                    name="role"
                    onFocus={() => setErrorLabel(false)}
                  >
                    <MenuItem id="freelance" value={"freelance"}>Freelancer</MenuItem>
                    <MenuItem id="business"value={"business"}>
                      Business owner/hiring manager
                    </MenuItem>
                  </Select>
                  <FormHelperText>
                    Will you be using this website as a Freelancer or Business
                    owner/hiring manager?
                  </FormHelperText>
                </FormControl>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: role === "business" ? "inline" : "none" }}
              >
                <TextField
                  name="businessName"
                  required
                  fullWidth
                  id="businessName"
                  label="Business Name"
                  autoFocus
                  onFocus={() => setErrorLabel(false)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: role === "business" ? "inline" : "none" }}
              >
                <TextField
                  required
                  fullWidth
                  id="businessIndustry"
                  label="Business Industry"
                  name="businessIndustry"
                  onFocus={() => setErrorLabel(false)}
                />
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: role === "freelance" ? "inline" : "none" }}
              >
                <TextField
                  name="phoneNumber"
                  required
                  fullWidth
                  id="phoneNumber"
                  label="Phone Number"
                  autoFocus
                  onFocus={() => setErrorLabel(false)}
                />
              </Grid>

              <Grid
                item
                xs={12}
                sm={6}
                sx={{ display: role === "freelance" ? "inline" : "none" }}
              >
                <TextField
                  required
                  fullWidth
                  id="location"
                  label="Location"
                  name="location"
                  autoComplete="location"
                  onFocus={() => setErrorLabel(false)}
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="./login" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  );
}
