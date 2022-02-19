import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';

import './App.css';

function About() {
  return (
    <div className="App">
        <Card sx={{ width: 300 }}>
            <div><TextField sx={{ p: 1 }} id="outlined-basic" label="Gender" variant="outlined" /> </div>
            <div><TextField sx={{ p: 1 }} id="outlined-basic" label="Age" variant="outlined" /> </div>
            <div><TextField sx={{ p: 1 }} id="outlined-basic" label="Investment Experience" variant="outlined" /> </div>
            <div><TextField sx={{ p: 1 }} id="outlined-basic" label="Goals" variant="outlined" /> </div>
            <div><TextField sx={{ p: 1 }} id="outlined-basic" label="Gender" variant="outlined" /> </div>
        </Card>
    </div>
  );
}

export default About;
