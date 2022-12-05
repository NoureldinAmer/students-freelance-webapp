import * as React from "react";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Grid from "@mui/material/Grid";
import { FormHelperText, TextField } from "@mui/material";
import { Box, Stack } from "@mui/system";
import TagsInput from "./TagsInput";

const products = [
  {
    name: "Product 1",
    desc: "A nice thing",
    price: "$9.99",
  },
  {
    name: "Product 2",
    desc: "Another thing",
    price: "$3.45",
  },
  {
    name: "Product 3",
    desc: "Something else",
    price: "$6.51",
  },
  {
    name: "Product 4",
    desc: "Best thing of all",
    price: "$14.11",
  },
  { name: "Shipping", desc: "", price: "Free" },
];

const addresses = ["1 MUI Drive", "Reactville", "Anytown", "99999", "USA"];
const payments = [
  { name: "Card type", detail: "Visa" },
  { name: "Card holder", detail: "Mr John Smith" },
  { name: "Card number", detail: "xxxx-xxxx-xxxx-1234" },
  { name: "Expiry date", detail: "04/2024" },
];

export default function Review({ formData }) {
  const handleSubmit = (id, value) => {
    formData[id] = value;
  };

  return (
    <React.Fragment>
      <Typography variant="h4" mb={4}>
        Salary and Locations
      </Typography>
      <Stack spacing={4}>
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6} >
            <TextField
              fullWidth
              id="outlined-number"
              label="Budget"
              type="budget"
              name="salary"
              InputLabelProps={{
                shrink: true,
              }}
              onBlur={(e) => handleSubmit(e.target.name, e.target.value)}
            />
            <FormHelperText>Enter your budget</FormHelperText>
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              id="outlined-number"
              label="Working Hours"
              fullWidth
              type="hours"
              name="workingHours"
              InputLabelProps={{
                shrink: true,
              }}
              onBlur={(e) => handleSubmit(e.target.name, e.target.value)}
            />
            <FormHelperText>Enter the weekly working hours for your project </FormHelperText>
          </Grid>
        </Grid>

        <Box>
          <FormHelperText>Enter your desired locations</FormHelperText>
          <TagsInput
            tags={["Obama", "Balls"]}
            formData={formData}
            name={"locations"}
          />
        </Box>
      </Stack>
    </React.Fragment>
  );
}
