import TextField from '@mui/material/TextField';
import GoogleButton from 'react-google-button'
import Grid from '@mui/material/Grid';

import Button from '@mui/material/Button';
import './App.css';
import {signInWithGoogle} from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const auth = null;
const user = null;

function Signup() {
  return (
    <div className="App">
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
    </div>
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

export default Signup;
