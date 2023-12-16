import * as React from 'react';
import { Box, TextField, Button } from '@mui/material';

export default function Search() {
  return (
    <Box style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '95%',
        marginBottom: '3rem'
      }}
      component="form"
      noValidate
      autoComplete="off"
    >
      <TextField sx={{ width: '40%' }} id="outlined-basic" placeholder='Title, Company, Salary' variant="outlined" />
      <TextField sx={{ width: '40%' }} id="outlined-basic" placeholder="Location" variant="outlined" />
      <Button sx={{ width: '15%' }} variant="outlined">Search</Button>
    </Box>
  );
};