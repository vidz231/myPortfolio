import React from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

export default function FeaturedProject() {
  const nav = useNavigate();
  const HandleClick = () => {
    nav('/Project');
  };
  return (
    <Box
      sx={{
        display: 'flex',
        // border: 'red solid',
        height: '40vh',
        justifyContent: 'space-evenly',
        flexFlow: 'row nowrap',
      }}
    >
      <Box
        sx={{
          flexBasis: '48%',
          //   border: 'green solid',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'flex-start',
          justifyContent: 'center',
        }}
      >
        {/* <Box sx={{ padding: '0 5%' }}> */}
        <Typography variant="h3">Featured Project</Typography>
        <Typography variant="body1">
          Check out some of my top projects.
        </Typography>
        <Button variant="contained" color="primary" onClick={HandleClick}>
          See All Projects
        </Button>
      </Box>
      {/* </Box> */}
      <Box sx={{ flexBasis: '48%' }}>
        {/* todo: add image card here pls */}
        <img
          // srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
          src={
            'https://wallpapers.com/images/featured/horizon-background-7fir6kqabih2ir2k.jpg'
          }
          alt="horizon-background-7fir6kqabih2ir2k.jpg"
          loading="lazy"
          width={'100%'}
          height={'100%'}
        />
      </Box>
    </Box>
  );
}
