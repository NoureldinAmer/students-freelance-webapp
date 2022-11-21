import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TagsInput from './TagsInput';
import { Box } from '@mui/system';

export default function PaymentForm({formData}) {
  return (
    <React.Fragment>
      <Typography variant="h4" mb={4}>
        Skills
      </Typography>
      <Box>
        <TagsInput tags={["Obama", "Balls"]} formData={formData} name={"skills"}/>
      </Box>
    </React.Fragment>
  );
}
