import React from 'react';
import Box from '@mui/material/Box';


const DashboardPage: React.FC = () => {
  return (
    <div>
      <h1>Dashboard</h1>
      <p>This is another Hello World.</p>
      <Box
      height={200}
      width={200}
      my={4}
      display="flex"
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey',
        pl: '20%',
       }}
    >
      Let's use material UI 🙏🙏.
    </Box>
    </div>
    
  );
};

export default DashboardPage;