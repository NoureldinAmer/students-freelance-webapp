import React, {useState} from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import TagsInput from './TagsInput';
import { Box } from '@mui/system';

export default function PaymentForm({formData}) {
  const [tags, setTags] = useState(["Nodejs", "Ball"])


  return (
    <React.Fragment>
      <Typography variant="h4" mb={4}>
        Skills
      </Typography>
      <Box>
      <TagsInput tags={tags} formData={formData}/>
      </Box>
    </React.Fragment>
  );
}
