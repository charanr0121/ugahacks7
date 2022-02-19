import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import './App.css';
import {signInWithGoogle} from "./Firebase";
import { getAuth, onAuthStateChanged } from "firebase/auth";



const auth = null;
const user = null

function Signup() {
  return (
    <div className="App">
        <Button variant="text" onClick={signInWithGoogle}>
          Click me
          </Button>
        <h1></h1>
        <Button variant="text" onClick={getInfo}>  
        get info   
          </Button>
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
