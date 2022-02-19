import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { shadows } from '@mui/system';

import './App.css';

function About() {
  return (
    <div className="App">
        <Grid 
        container 
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{p: 3}}>
            <Grid item>
                <Box sx={{ p: 2, backgroundColor: 'white', borderRadius: 4, boxShadow: 1 }}>
                    <div><TextField sx={{ p: 1 }} id="standard-basic" label="Gender" variant="standard" /> </div>
                    <div><TextField sx={{ p: 1 }} id="standard-basic" label="Age" variant="standard" /> </div>
                    <div><TextField sx={{ p: 1 }} id="standard-basic" label="Investment Experience" variant="standard" /> </div>
                    <div><TextField sx={{ p: 1 }} id="standard-basic" label="Goals" variant="standard" /> </div>
                    <div><TextField sx={{ p: 1 }} id="standard-basic" label="Gender" variant="standard" /> </div>
                </Box>
            </Grid>
            <Grid item>
                <Button variant="contained">Next</Button>
            </Grid>
        </Grid>

    </div>
  );
}

export default About;
