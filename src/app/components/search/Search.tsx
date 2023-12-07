import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Search() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Commitment" variant="outlined" />
      <TextField id="outlined-basic" label="Site" variant="outlined" />
      <Button variant="outlined">Search</Button>
    </Box>
  );
};