
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import SaveIcon from '@mui/icons-material/Save';

export default function BasicButtons() {
  return (
    <Stack spacing={2} direction="row">
      <Button variant="contained" color = "secondary" >Contained</Button>
        <br /><br />
      <Button variant="contained" color = "success" size="large" startIcon={<DeleteIcon />}>Contained</Button>
      
      <Button variant="contained" color = "success" size="small" endIcon={<SendIcon />}>Contained</Button>

      <Button variant="contained" color = "success" size="small" endIcon={<SaveIcon />}>Contained</Button>


    </Stack>
  );
}