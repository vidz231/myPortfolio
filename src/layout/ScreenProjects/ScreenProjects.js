import React, { Suspense, lazy, useEffect, useState } from 'react';
import { getPublicResp } from './ProjectServices';
import { Box, CircularProgress, Container, Typography } from '@mui/material';
import { useLocation } from 'react-router-dom';
import DemoChat from './DemoChat';
const ProjectCard = lazy(() => import('./ProjectCard'));
export default function ScreenProjects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const loc = useLocation();
  useEffect(() => {
    setLoading(false);
    const fetchData = async () => {
      try {
        const response = await getPublicResp();
        setData(response);
      } catch (error) {
        console.error(error);
      }
      setLoading(true);
    };
    if (!(loc.pathname === '/projects')) {
      fetchData();
    }
  }, [loc.pathname]);
  return (
    <>
      <Container>
        <Typography variant="h2" textAlign={'center'}>
          My Finished Projects
        </Typography>
        <Typography variant="body1" textAlign={'center'}>
          and more to come...
        </Typography>
        {loading && (
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
            {data.length !== 0 &&
              data?.map((item) => {
                return (
                  // <Box flexBasis={'30%'}>
                  //   <Typography variant="h6">{item.name}</Typography>
                  //   <Typography variant="body1">{item.url}</Typography>
                  // </Box>
                  <Suspense
                    fallback={
                      <CircularProgress
                        sx={{
                          display: 'flex',
                          justifyContent: 'center',
                          alignItems: 'center',
                        }}
                      />
                    }
                  >
                    <ProjectCard
                      reLink={item.html_url}
                      name={item.name}
                      description={item.description}
                      technology={item.language}
                    />
                  </Suspense>
                );
              })}
            <Suspense
              fallback={
                // <Skeleton variant="rectangular" width={'300px'} height={'100%'} />
                <CircularProgress />
              }
            >
              <ProjectCard
                reLink="https://thuydo259blog.info"
                name="Blog Page"
                description="this is a blog page i made for my mom uusing react js"
                technology={[
                  'react, ',
                  'material ui, ',
                  'firebase, ',
                  'nodejs ',
                ]}
              />
            </Suspense>
          </Box>
        )}
      </Container>
    </>
  );
}
