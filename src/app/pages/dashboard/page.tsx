'use client'

import { useState } from 'react';
import { Container, List, ListItem } from '@mui/material';
import JobCard from '../../components/job-card/JobCard';
import DetailedJobCard from '@/app/components/detailed-job-card/JobDetailedCard';
import getAllJobs from '@/app/lib/getAllJobs';

export default function Dashboard() {
  const [detailedCard, setDetailedCard] = useState<JSX.Element>();

  const jobsData: Job[] = getAllJobs();
  
  async function displayDetailedCardContent(job: Job) {

    console.log('SHOW JOB');
    console.log('JOB: ', job.title);
    
    setDetailedCard(<DetailedJobCard key={job.id} job={job} />);
  };

  const displayJobs = jobsData.map(job => {
    return (
      <ListItem key={job.id}>
        <JobCard key={job.id} job={job} displayDetailedCardContent={displayDetailedCardContent} />
      </ListItem>
    );
  });

  return (
    <Container sx={{
      display: 'flex',
      justifyContent: 'space-between',
      alignItems: 'center',
      minWidth: '100%',
      margin: '0',
    }}>
      <List sx={{ 
        width: '50%', 
        height: '100vh',                  
        overflow: 'auto',
        '&::-webkit-scrollbar': { display: 'none' },
      }}>
        {displayJobs}
      </List>
      <>
        {detailedCard}
      </>
    </Container>
  );
};