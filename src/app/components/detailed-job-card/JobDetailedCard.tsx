import { Typography, Box, Stack } from '@mui/material';
import ApartmentOutlinedIcon from '@mui/icons-material/ApartmentOutlined';
import CodeIcon from '@mui/icons-material/Code';
import LocationOnOutlinedIcon from '@mui/icons-material/LocationOnOutlined';
import SummarizeOutlinedIcon from '@mui/icons-material/SummarizeOutlined';
import WatchOutlinedIcon from '@mui/icons-material/WatchOutlined';
import AccessTimeOutlinedIcon from '@mui/icons-material/AccessTimeOutlined';

type Props = {
    job: Job
};

export default function DetailedJobCard({ job }: Props): JSX.Element {

    return (
        <Box sx={{
            width: '50%',
            height: '95%',
            padding: '2rem 2rem 3rem 2rem',
            border: '#000 solid 1px',
            borderRadius: '5px'
        }}>
            <Stack direction="row" spacing={1}>
                <ApartmentOutlinedIcon sx={{ fontSize: '3rem' }}/>
                <Typography variant='h3' >{job.company}</Typography>
            </Stack>            
            <Typography variant='h2' >{job.title}</Typography>
            <br/> 
            <Stack direction="row" spacing={1}>
                <WatchOutlinedIcon />
                <Typography>{job.datePosted}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
                <AccessTimeOutlinedIcon />
                <Typography>{job.commitment}</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
                <LocationOnOutlinedIcon />
                <Typography>New York, NY</Typography>
            </Stack>
            <Stack direction="row" spacing={1}>
                <SummarizeOutlinedIcon />
                <Typography>Javascript, React, TypeScript, AWS...</Typography>
            </Stack>
            <br/>
            <Typography>
                Job Description:
                <br></br>
                <br></br>
                At Bank of America, we are guided by a common purpose to help make financial lives better through the power of every connection. Responsible Growth is how we run our company and how we deliver for our clients, teammates, communities and shareholders every day.
                <br></br>
                <br></br>
                One of the keys to driving Responsible Growth is being a great place to work for our teammates around the world. We are devoted to being a diverse and inclusive workplace for everyone. We hire individuals with a broad range of backgrounds and experiences and invest heavily in our teammates and their families by offering competitive benefits to support their physical, emotional, and financial well-being
            </Typography>
            <Box
                sx={{
                    width: '95%',
                    margin: '1rem 0',
                    padding: '1rem',
                    border: '#000 solid 1px',
                    borderRadius: '5px'
                }}
            >
                <Typography variant='h5' >Featured Benefits:</Typography>
                <br/>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-around'
                    }}
                >
                    <Stack>
                        <Typography>- Medical insurance</Typography>
                        <Typography>- Dental insurance</Typography>
                        <Typography>- Vision insurance</Typography>
                    </Stack>
                    <Stack>
                        <Typography>- Disability insurance</Typography>
                        <Typography>- Tuition assistance</Typography>
                        <Typography>- 401 (k)</Typography>
                    </Stack>
                </Box>
            </Box>
        </Box>
    );
};
