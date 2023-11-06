import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Box, Button, CssBaseline, useTheme } from '@mui/material';

export default function NavBar() {
  const nav = useNavigate();
  const HandleCLick = (e) => {
    nav('/' + e.target.innerText.toLowerCase());
  };
  const theme = useTheme();

  return (
    // <CssBaseline />
    <Box
      sx={{
        bgcolor: 'background.default',
        display: 'flex',
        height: '6vh',
        flexFlow: 'row nowrap',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: 'solid 1px black',
      }}
    >
      <Box
        sx={{
          flexBasis: '40%',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'start',
        }}
      >
        <Link
          to="/"
          // color="text.primary"
          style={{
            fontSize: '2rem',
            textDecoration: 'none',
            visited: 'none',
            color: theme.palette.text.primary,
            marginLeft: '5%',
            cursor: 'pointer',
          }}
        >
          LeVi
        </Link>
      </Box>

      <Box
        sx={{
          flexBasis: '60%',
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'end',
        }}
      >
        <Button
          variant="text"
          color="primary"
          onClick={() => {
            nav('/');
          }}
        >
          Home
        </Button>
        <Button variant="text" color="primary" onClick={HandleCLick}>
          Resume
        </Button>
        <Button variant="text" color="primary" onClick={HandleCLick}>
          Project
        </Button>
      </Box>
    </Box>
  );
}
