const DUMMY_DATA: Job[] = [
    {
      id: 1,
      title: 'Full Stack Developer',
      datePosted: '12 hours ago',
      salary: '$85,000 - $100,000',
      level: 'Entry',
      company: 'Google',
      commitment: 'Full-time',
      site: 'Hybrid'
    },
    {
      id: 2,
      title: 'Frontend Developer',
      datePosted: '16 hours ago',
      salary: '$85,000 - $90,000',
      level: 'Entry',
      company: 'Rock Smith',
      commitment: 'Permanent',
      site: 'Offsite'
    },
    {
      id: 3,
      title: 'Backend Developer',
      datePosted: '2 hours ago',
      salary: '$110,000',
      level: 'Mid-Level',
      company: 'Allister and Co.',
      commitment: 'Full-Time',
      site: 'Onsite'
    },
    {
      id: 4,
      title: 'Full Stack Developer',
      datePosted: '12 hours ago',
      salary: '$85,000 - $100,000',
      level: 'Entry',
      company: 'Google',
      commitment: 'Full-time',
      site: 'Hybrid'
    },
    {
      id: 5,
      title: 'Frontend Developer',
      datePosted: '16 hours ago',
      salary: '$85,000 - $90,000',
      level: 'Entry',
      company: 'Rock Smith',
      commitment: 'Permanent',
      site: 'Offsite'
    },
    {
      id: 6,
      title: 'Backend Developer',
      datePosted: '2 hours ago',
      salary: '$110,000',
      level: 'Mid-Level',
      company: 'Allister and Co.',
      commitment: 'Full-Time',
      site: 'Onsite'
    },
];

export default function getAllJobs() {
    const res = DUMMY_DATA;

    if(!res) throw new Error('failed to fetch data');

    return res;
};