import {
  Box,
  Button,
  Container,
  CssBaseline,
  Grid,
  Typography,
} from '@mui/material';
import React, { useRef } from 'react';
import ProjectCarousel from './ProjectCarousel/ProjectCarousel';
import FeaturedProject from './FeaturedProject/FeaturedProject';
import AboutMe from './AboutMe/AboutMe';

export default function ScreenHome() {
  const ref = useRef(null);
  const scrollTo = (ref) => {
    if (ref && ref.current.id === 'hi' /* + other conditions */) {
      ref.current.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <ProjectCarousel />
      </Grid>
      <Container>
        <Grid item xs={12}>
          <FeaturedProject />
        </Grid>
        <Grid item xs={12}>
          <AboutMe />
        </Grid>
      </Container>
    </Grid>
  );
}
