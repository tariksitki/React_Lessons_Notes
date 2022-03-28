

import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function BasicTextFields() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '50ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Name" variant="outlined"  required/>
      <br />
      <TextField id="outlined-basic" label="Soyisim" variant="outlined" error required/>

      <TextField id="outlined-basic" label="E-Mail" variant="outlined" error required/>
      
    </Box>
  );
}

// typed script nedir