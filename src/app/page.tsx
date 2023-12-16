import Box from '@mui/material/Box';
import Dashboard from './pages/dashboard/page';
import Search from './components/search/Search';
import Header from './components/header/Header';

export default function Home() {
  return (
    <main style={{
      display: 'flex',
      justifyContent: 'center',
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Header />
      <Search />
      <Box style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexDirection: 'row',
        width: '100%',
      }}>
        <Dashboard />
      </Box>
    </main>
  );
};
