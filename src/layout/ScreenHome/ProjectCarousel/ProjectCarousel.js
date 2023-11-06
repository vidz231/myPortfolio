import { Box, Button, Typography, useTheme } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function ProjectCarousel() {
  const nav = useNavigate();
  return (
    <>
      <Box
        sx={{
          height: '30vh',
          bgcolor: 'background.paper',

          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          <Typography variant="h3" sx={{ color: 'text.primary' }}>
            Hi, Welcome To My Profile
          </Typography>
          <Typography variant="h5" textAlign={'center'} color={'text.primary'}>
            I'm a passionate fullstack developer
          </Typography>
          <Button
            variant="contained"
            color="primary"
            size="medium"
            sx={{ width: '20vw', margin: '0 auto' }}
            onClick={() => {
              nav('/project');
            }}
          >
            View Projects
          </Button>
        </Box>
      </Box>
    </>
  );
}
