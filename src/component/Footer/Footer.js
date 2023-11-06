import { Box, Typography } from '@mui/material';
import React from 'react';

export default function Footer() {
  return (
    <Box
      bgcolor={'background.default'}
      sx={{
        display: 'flex',
        margin: '0 auto',
        // width: '100%',
        // border: 'red solid 1px',
        height: '3.5vh',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Typography variant="body1" color={'text.primary'}>
        Contact me at vile0475@gmail.com
      </Typography>
    </Box>
  );
}
