'use client';

import * as React from 'react';
import { 
  Card,
  Box,
  Stack,
  CardContent,
  Typography,
  Button
} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

type Props = {
  job: Job,
  displayDetailedCardContent: Function
};

const vBar = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    |
  </Box>
);

export default function BasicCard({ job, displayDetailedCardContent }: Props) {

  return (
    <Card sx={{
      ':hover': { 
          cursor: 'pointer',
          boxShadow: 15
        }, 
      }}
      onClick={() => displayDetailedCardContent(job)}
    >
      <CardContent sx={{ paddingBottom: '0' }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {job.datePosted}
        </Typography>
        <Typography variant='h3'>
          {job.title}
        </Typography>
        <Typography variant="h6" sx={{ marginBottom: '1.5rem' }}>
          {job.salary}  {vBar}  {job.level} 
        </Typography>
        <Stack direction="row" gap={1} sx={{ marginBottom: '0.5rem' }}>
          <CodeIcon /> 
          <Typography variant='body1' color="text.secondary">
            {job.company}
          </Typography>
        </Stack>
        <Stack direction="row" gap={1} sx={{ marginBottom: '0.5rem' }}>
          <CalendarMonthOutlinedIcon /> 
          <Typography variant='body1' color="text.secondary">
            {job.commitment}
          </Typography>
        </Stack>
        <Stack direction="row" gap={1} sx={{ marginBottom: '0.5rem' }}>
          <HomeWorkOutlinedIcon /> 
          <Typography variant='body1' color="text.secondary">
            {job.site}
          </Typography>
        </Stack>
      </CardContent>
      {/* <Box sx={{ float: 'right' }}>
        <Button sx={{ border: 'none' }} onClick={() => displayDetailedCardContent(job)} >Learn More</Button>
      </Box> */}
    </Card>
  );
};