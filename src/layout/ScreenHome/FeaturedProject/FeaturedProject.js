import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { getPublicResp } from '../../ScreenProjects/ProjectServices.js';
import ProjectCard from '../../ScreenProjects/ProjectCard.js';
export default function FeaturedProject() {
  const nav = useNavigate();
  const [data, setData] = useState([]);
  const loc = useLocation();
  const HandleClick = () => {
    nav('/Project');
  };
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    setIsLoading(false);
    if (!loc?.state) {
      import('../../ScreenProjects/ProjectServices.js').then((res) => {
        res.getPublicResp().then((dt) => {
          if (Array.isArray(dt)) {
            setData(dt);
            console.log(data);
            dt.forEach((item) => {
              console.log(item.name);
            });

            setIsLoading(false);
          }
        });
      });
    }
  }, [loc?.state]);
  return (
    <Box
      sx={{
        display: 'flex',
        // border: 'red solid',
        height: '40vh',
        justifyContent: 'space-evenly',
        flexFlow: 'row nowrap',
        marginTop: '1%',
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
        {/* <Typography>asdas</Typography> */}
        <Box
          sx={{
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-evenly',
            alignItems: 'center',
          }}
        >
          {isLoading ? (
            <Typography variant="h4">Loading...</Typography>
          ) : (
            data?.map((item) => {
              return (
                // <Box sx={{ flexBasis: '100%' }}>
                <ProjectCard
                  name={item.name}
                  reLink={item.html_url}
                  technology={item.language}
                  description={item.description}
                />
                // </Box>
              );
            })
          )}
        </Box>
      </Box>
    </Box>
  );
}
