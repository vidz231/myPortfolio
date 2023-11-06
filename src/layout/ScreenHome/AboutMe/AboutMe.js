import { Box, ThemeProvider, Typography, useTheme } from '@mui/material';
import React from 'react';
import AboutMeCard from './AboutMeCard';

export default function AboutMe() {
  const theme = useTheme();
  return (
    <ThemeProvider theme={theme}>
      <Box
        sx={{
          display: 'flex',
          height: '60vh',
          flexFlow: 'row nowrap',
          justifyContent: 'space-evenly',
          // bgcolor: 'blue',
        }}
      >
        <Box
          sx={{
            flexBasis: '48%',
            display: 'flex',
            flexFlow: 'column',
            alignItems: 'flex-start',
            justifyContent: 'space-between',
          }}
        >
          {/* <Box sx={{ padding: '0 5%' }}> */}
          <Box sx={{ height: '20%' }}>
            <Typography variant="h3">About Me</Typography>
            <Typography variant="body1">
              Learn more about my skills and experience.
            </Typography>
          </Box>

          <Box
            sx={{
              display: 'flex',
              flexFlow: 'column',
              justifyContent: 'space-between',
              width: '100%',
              height: '80%',
            }}
          >
            <AboutMeCard
              title="Skills"
              subtitle="Web development"
              content="Javascript,Java,C++,C,HTML,CSS,reactJS"
              imgSrc="https://c8.alamy.com/comp/2AKJN0A/initial-da-letter-logo-with-creative-modern-business-typography-vector-template-creative-abstract-letter-da-logo-vector-2AKJN0A.jpg"
            />
            <AboutMeCard
              title="Education"
              subtitle="Bachelor's Degree"
              content="Major in Software Engineering at FPT University"
              imgSrc="https://uni.fpt.edu.vn/Data/Sites/1/skins/default/img/og-image.png"
            />
          </Box>
        </Box>
        {/* </Box> */}
        <Box
          sx={{
            flexBasis: '48%',
            display: { xs: 'none', md: 'block' },
          }}
        >
          <img
            src="https://img.freepik.com/free-photo/wooden-planks-without-end_1149-97.jpg?size=626&ext=jpg&ga=GA1.1.1880011253.1699056000&semt=ais"
            alt="horizon-background-7fir6kqabih2ir2k.jpg"
            loading="lazy"
            width={'100%'}
            height={'50%'}
          />
          <Typography
            variant="body1"
            textOverflow={'unset'}
            textAlign={'center'}
          >
            Hi, My name is Vi and I'm currently a second year software engineer
            student at FPT University. I'm a self-taught self-motivated web
            developer and I'm passionate about learning and building new things.
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
}
