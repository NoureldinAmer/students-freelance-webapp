import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import TagsInput from './TagsInput'
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import {
  Box,
  FormControl,
  FormHelperText,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function AddressForm({ formData }) {
  const handleSubmit = (id, value) => {
    formData[id] = value;
    console.log(formData);
  };

  const [role, setRole] = useState("");
  const handleChange = (event) => {
    setRole(event.target.value);
  };

  return (
    <React.Fragment>
      <Typography variant="h4" mb={4}>
        Headline
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} sm={6}>
          <TextField
            required
            id="jobName"
            name="jobName"
            label="Add a title"
            defaultValue={formData.jobName}
            fullWidth
            autoComplete="given-name"
            onBlur={(e) => handleSubmit(e.target.name, e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <FormControl sx={{ minWidth: 120, width: "100%" }}>
            <InputLabel id="demo-simple-select-helper-label">
              Duration
            </InputLabel>
            <Select
              labelId="demo-simple-select-helper-label"
              id="demo-simple-select-helper"
              value={role}
              label="Duration"
              onChange={handleChange}
              onBlur={(e) => handleSubmit(e.target.name, e.target.value)}
              name="duration"
            >
              <MenuItem value={"More than 6 months"}>
                More than 6 months
              </MenuItem>
              <MenuItem value={"3 to 6 months"}>3 to 6 months</MenuItem>
              <MenuItem value={"1 to 3 months"}>1 to 3 months</MenuItem>
            </Select>
            <FormHelperText>How long will your work take?</FormHelperText>
          </FormControl>
        </Grid>
        <Grid item xs={12}>
          <Typography variant="h5" p={1}>
            Describe Your Job
          </Typography>
          <TextField
          defaultValue={formData.description}
            required
            id="description"
            name="description"
            label="Descriptoin"
            fullWidth
            multiline
            minRows={5}
            onBlur={(e) => handleSubmit(e.target.name, e.target.value)}
          />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}
