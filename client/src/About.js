import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import Grid from '@mui/material/Grid';
import * as React from 'react';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Lottie from 'react-lottie';
import animationData from './lotties/lf20_q9mzugao.json';
import './App.css';

function About() {

  const [gender, setGender, investExp, setInvestExp, investGoal, setInvestGoal] = React.useState('');
  const handleChangeGender = (event) => {
    setGender(event.target.value);
  };
  const handleChangeInv = (event) => {
    setInvestExp(event.target.value);
  };
  const handleChangeGoal = (event) => {
    setInvestGoal(event.target.value);
  };

  return (
    <div className="App" sx={{ p: 0, height: "100%", width: "100%",   }}>
        <Grid container  spacing={0} direction="row" sx={{ p: 0, height: "860px", width: "100%", backgroundColor: 'white'}} >

          <Grid container spacing={0} direction="column" alignItems="center" justifyContent="center"
            sx={{ p: 0, height: "100%", width: "40%", backgroundColor: '#a9c7f7'}}>
            <LottieRender>
            </LottieRender>
          </Grid>


        <Grid item style={{ width: "60%", height: "100%" }} container spacing={0} direction="column" justifyContent="center">
         
          <Grid item sx={{ p: 1 }}>
            <TextField id="standard-basic" label="Age" variant="standard" />
          </Grid>

          <Grid item sx={{ p: 1 }}>
            <Box sx={{ minWidth: 60, width: "60%"}}>
              <FormControl fullWidth>
                <InputLabel id="simple-select-label">Gender</InputLabel>
                <Select
                  labelId="simple-select-label"
                  id="simple-select"
                  value={gender}
                  label="Gender"
                  onChange={handleChangeGender}
                >
                  <MenuItem value={10}>Male</MenuItem>
                  <MenuItem value={20}>Female</MenuItem>
                  <MenuItem value={30}>Transgender</MenuItem>
                  <MenuItem value={40}>Non-binary/non-conforming</MenuItem>
                  <MenuItem value={50}>Prefer not to respond</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          {/* Investment Experience - Dropdown Menu */}
          <Grid item sx={{ p: 1 }}>
            <Box sx={{ minWidth: 60, width: "60%"  }}>
              <FormControl fullWidth>
                <InputLabel id="simple-select-label">Invesment Experience</InputLabel>
                <Select
                  labelId="simple-select-label"
                  id="simple-select"
                  value={investExp}
                  label="Invesment Experience"
                  onChange={handleChangeInv}
                >
                  <MenuItem value={60}>None</MenuItem>
                  <MenuItem value={70}>Not Much</MenuItem>
                  <MenuItem value={80}>I know what I'm doing</MenuItem>
                  <MenuItem value={90}>I'm an expert</MenuItem>
                </Select>
              </FormControl>
            </Box>
          </Grid>

          {/* Investment Goal - Dropdown Menu */}
          <Grid item sx={{ p: 1 }}>
            <Box sx={{ minWidth: 60, width: "60%"  }}>
                <FormControl fullWidth>
                  <InputLabel id="simple-select-label">Invesment Goals</InputLabel>
                  <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    value={investGoal}
                    label="Invesment Goal"
                    onChange={setInvestGoal}
                  >
                    <MenuItem value={60}>Perserve my savings</MenuItem>
                    <MenuItem value={70}>A source of income</MenuItem>
                    <MenuItem value={80}>Growth</MenuItem>
                    <MenuItem value={90}>Speculative trading</MenuItem>
                    <MenuItem value={90}>Other</MenuItem>
                  </Select>
                </FormControl>
              </Box>
          </Grid>
          
          {/* Next Button */}
          <Grid item sx={{ p: 1 }}></Grid>
          <Link to="/values">
              <Button>
               NEXT
              </Button>
            </Link>
            </Grid>

        </Grid>

    </div>
  );
}

export function LottieRender() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: { preserveAspectRatio: "xMidYMid slice" }
  };

  return (
    <div>
      <Lottie
        options={defaultOptions}
        height={350}
        width={500}
      />
    </div>
  );
}

export default About;
