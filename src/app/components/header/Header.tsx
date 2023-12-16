import { Box, Typography } from '@mui/material';

export default function Header() {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '70%',
                margin: '3rem 0',   
            }}
        >
            <Typography variant='h1'>
                Job Scraper
            </Typography>
            <Typography sx={{ marginTop: '1rem', width: '80%' }}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id aliquet risus feugiat in. Tempus urna et pharetra pharetra.
            </Typography>
        </Box>
    );
};