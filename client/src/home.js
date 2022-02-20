import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
// import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
// import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import {Link} from "react-router-dom";
import GoogleButton from 'react-google-button'
import './App.css';
import {signInWithGoogle} from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";


function Home() {
    const theme = createTheme();
  return (
    <ThemeProvider theme={theme}>
      <Grid container component="main" sx={{ height: '100vh' }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1572202808998-93788f6d39da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1035&q=80)',
            backgroundRepeat: 'no-repeat',
            backgroundColor: (t) =>
              t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              {/* <LockOutlinedIcon /> */}
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box component="form" noValidate sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
               <Link to="/about">
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
              >
               Sign In
              </Button>
              </Link>

              {/* <div className="App"> */}
                <Grid
                    container
                    spacing={2}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ p: 3 }}
                >
                    <GoogleButton type="light" onClick={signInWithGoogle} />
                    <Button variant="text" onClick={getInfo}>
                    get info
                    </Button>
                </Grid>
            {/* </div> */}
  

              <Grid container>
                <Grid item xs>
                  {/* <Link href="#" variant="body2"> */}
                    Forgot password?
                  {/* </Link> */}
                </Grid>
                <Grid item>
                  {/* <Link href="#" variant="body2"> */}
                    {"Don't have an account? Sign Up"}
                  {/* </Link> */}
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </ThemeProvider>
  );
}

function getInfo() {
    const auth = getAuth();
    const user = auth.currentUser;

    if (user) {
        console.log(user);
    } else {
        // No user is signed in.
    }
}


export default Home;
