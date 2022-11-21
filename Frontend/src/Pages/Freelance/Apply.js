import { Paper } from "@mui/material";
import { Stack } from "@mui/system";
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
} from "@mui/material";
import { useHistory } from "react-router-dom";
import styled from "@emotion/styled";

function Apply() {
  return (
    <Box
      sx={{
        p: "40px",
        height: "calc(100vh - 64px)",
        maxHeight: "calc(100vh - 64px)",
        overflowY: "scroll",
      }}
      justifyContent="center"
      alignItems={"center"}
      spacing={0}
    >
      <Box pl={15} pr={15}>
        <Typography variant="h5">SUBMIT YOUR APPLICATION</Typography>
        <Box
          component="form"
          noValidate="false"
          //onSubmit={handleSubmit}
          sx={{ mt: 3 }}
          //

          justifyContent="center"
          alignItems={"center"}
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
                autoFocus
                //onChange={(e) => setFirstName(e.target.value)}
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
                //onChange={(e) => setLastName(e.target.value)}
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
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="phone"
                label="Phone"
                type="number"
                id="phome"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControl sx={{ minWidth: 120, width: "100%" }}>
                <InputLabel id="demo-simple-select-helper-label">
                  Years Of Experience
                </InputLabel>
                <Select
                  labelId="demo-simple-select-helper-label"
                  id="demo-simple-select-helper"
                  //value={role}
                  label="years of experience"
                  //onChange={handleChange}
                  name="YOF"
                >
                  <MenuItem value={"less than 3 months"}>
                    less than 3 months
                  </MenuItem>
                  <MenuItem value={"3 to 8 months"}>3 to 8 months</MenuItem>
                  <MenuItem value={"more than 8 months"}>
                    more than 8 months
                  </MenuItem>
                </Select>
                <FormHelperText>
                  How many months/years of experience do you have in this
                  industry
                </FormHelperText>
              </FormControl>
            </Grid>

            <Grid item xs={12}>
              <Typography variant="h5" mb={1}>
                Links
              </Typography>
              <TextField
                required
                fullWidth
                id="linkdin"
                label="Linkdin URL"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="twitter"
                label="Twitter URL"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="github"
                label="GitHub URL"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="portfolio"
                label="Portfolio URL"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                id="other"
                label="Other Website"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <Typography variant="h5" p={1}>
                Additional Information
              </Typography>
              <TextField
                id="description"
                name="description"
                label="Add a cover letter"
                fullWidth
                multiline
                minRows={5}
              />
            </Grid>
          </Grid>
          <Stack direction={"row"} justifyContent={"center"}>
            <Button
              type="submit"
              variant="contained"
              sx={{
                mt: 3,
                mb: 2,
                bgcolor: "#0C92F3",
                ":hover": {
                  bgcolor: "#3a81d3",
                },
              }}
            >
              SUBMIT APPLICATION
            </Button>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
}

export default Apply;
