import React, { useEffect, useState } from 'react';
import { getPublicResp } from './ProjectServices';
import { Box, Button, Container, Typography } from '@mui/material';
import ProjectCard from './ProjectCard';

export default function ScreenProjects() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await getPublicResp();
        setData(response);
        setIsLoading(false);
      } catch (error) {
        console.error(error);
        setIsLoading(false);
      }
    };

    fetchData();
  }, []);
  return (
    <>
      <Container>
        <Typography variant="h2" textAlign={'center'}>
          My Finished Projects
        </Typography>
        <Typography variant="body1" textAlign={'center'}>
          and more to come...
        </Typography>
        <Box
          sx={{
            width: '100%',
            display: 'flex',
            flexFlow: 'row wrap',
            justifyContent: 'space-evenly',
            alignItems: 'flex-start',
            rowGap: '2rem',
          }}
        >
          {!isLoading &&
            data.map((item) => {
              return (
                // <Box flexBasis={'30%'}>
                //   <Typography variant="h6">{item.name}</Typography>
                //   <Typography variant="body1">{item.url}</Typography>
                // </Box>
                <ProjectCard
                  reLink={item.html_url}
                  name={item.name}
                  description={item.description}
                  technology={item.language}
                />
              );
            })}

          <ProjectCard
            reLink="https://thuydo259blog.info"
            name="Blog Page"
            description="this is a blog page i made for my mom uusing react js"
            technology={['react, ', 'material ui, ', 'firebase, ', 'nodejs ']}
          />
        </Box>
      </Container>
    </>
  );
}
