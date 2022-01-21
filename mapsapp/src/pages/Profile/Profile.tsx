import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Profile = () => {
  return (
    <ThemeProvider theme={theme}>
    <Container component='main' maxWidth='xs'>
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}>
        <Avatar sx={{ m: 1, bgcolor: 'success.main' }}>
        </Avatar>
        <Typography component='h1' variant='h5'>
          Profile
        </Typography>
        <Grid container spacing={2}>
              <Grid item xs={12}>
             <Box  sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              border: 1,
        }}>
          First Name</Box>
              </Grid>
              <Grid item xs={12}>
              <Box  sx={{
              marginTop: 0,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'start',
              border: 1,
        }}>
          Last Name</Box>
              </Grid>
              </Grid>
             </Box>
      </Container>
    </ThemeProvider>
  );
};

export default Profile;