'use client';

import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import CodeIcon from '@mui/icons-material/Code';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';
import HomeWorkOutlinedIcon from '@mui/icons-material/HomeWorkOutlined';

type Props = {
  jobs: Jobs[]
};

const vBar = (
  <Box
    component="span"
    sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
  >
    |
  </Box>
);

export default function BasicCard({ jobs }: Props) {

  console.log(jobs);

  const displayData = jobs.map(job => {
    return (
      <ListItem>
        <Card sx={{ width: 500 }}>
          <CardContent sx={{ paddingBottom: '0' }}>
            <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
              {job.datePosted}
            </Typography>
            <Typography variant='h5'>
              {job.title}
            </Typography>
            <Typography variant="subtitle1" component="div" sx={{ marginBottom: '1.5rem' }}>
              {job.salary}  {vBar}  {job.level} 
            </Typography>
            <Stack direction="row" alignItems="center" gap={1} sx={{ marginBottom: '0.5rem' }}>
              <Typography variant='body1' color="text.secondary">
                <CodeIcon /> {job.company}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} sx={{ marginBottom: '0.5rem' }}>
              <Typography variant='body1' color="text.secondary">
                <CalendarMonthOutlinedIcon /> {job.commitment}
              </Typography>
            </Stack>
            <Stack direction="row" alignItems="center" gap={1} sx={{ marginBottom: '0.5rem' }}>
              <Typography variant='body1' color="text.secondary">
                <HomeWorkOutlinedIcon /> {job.site}
              </Typography>
            </Stack>
          </CardContent>
          <CardActions>
            <Button size="small">Learn More</Button>
          </CardActions>
        </Card>
      </ListItem>
    );
  });

  return (
    <List>
      {displayData}
    </List>
  );
}