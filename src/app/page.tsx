import Navbar from './components/search/Search';
import JobCard from './components/job-card/JobCard';

const DUMMY_DATA = [
  {
    title: 'Full Stack Developer',
    datePosted: '12 hours ago',
    salary: '$85,000 - $100,000',
    level: 'Entry',
    company: 'Google',
    commitment: 'Full-time',
    site: 'Hybrid'
  },
  {
    title: 'Frontend Developer',
    datePosted: '16 hours ago',
    salary: '$85,000 - $90,000',
    level: 'Entry',
    company: 'Rock Smith',
    commitment: 'Permanent',
    site: 'Offsite'
  },
  {
    title: 'Backend Developer',
    datePosted: '2 hours ago',
    salary: '$110,000',
    level: 'Mid-Level',
    company: 'Allister and Co.',
    commitment: 'Full-Time',
    site: 'Onsite'
  },
];

export default function Home() {
  return (
    <main>
      <JobCard jobs={DUMMY_DATA}/>
    </main>
  );
};
