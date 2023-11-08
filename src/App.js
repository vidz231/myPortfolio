import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import NavBar from './layout/ScreenHome/NavBar';
import ScreenAbout from './layout/ScreenAbout/ScreenAbout';
import ScreenAdmin from './layout/ScreenAdmin/ScreenAdmin';
import ScreenHome from './layout/ScreenHome/ScreenHome';
import {
  Box,
  Container,
  Grid,
  ThemeProvider,
  createTheme,
} from '@mui/material';
import Footer from './component/Footer/Footer';
import { themeOptions } from './component/theme/ThemeOptions';
import ScreenProjects from './layout/ScreenProjects/ScreenProjects';
import DemoChat from './layout/ScreenProjects/DemoChat';

export default function App() {
  const theme = createTheme(themeOptions);
  return (
    <>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <DemoChat />
          <NavBar />
          <Grid container collum spacing={1}>
            <Grid item xs={12}>
              <Box sx={{ minHeight: '89.3vh' }}>
                <Routes>
                  <Route path="/" element={<ScreenHome />} />
                  <Route path="/project" element={<ScreenProjects />} />
                  <Route path="/admin" element={<ScreenAdmin />} />
                </Routes>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Footer />
            </Grid>
          </Grid>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}
