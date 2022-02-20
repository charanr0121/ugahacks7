import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';
import Lottie from 'react-lottie';
import animationData from './lotties/lf20_q9mzugao.json';
import { red } from '@mui/material/colors';


import { shadows } from '@mui/system';

import './App.css';

function StandaloneToggleButton(props) {
  const [selected, setSelected] = React.useState(false);

  return (
    <ToggleButton
      value="check"
      selected={selected}
      onChange={() => {
        setSelected(!selected);
      }}

      variant="outlined" size="large" style={{ width: "70%" }}
      color="primary"
    >
      {props.esg}
      </ToggleButton>
  );
}

function Values() {
  return (
    <div className="App" sx={{ p: 0, height: "100%", width: "100%",   }}>
        <Grid 
        container 
        spacing={0}
        direction="row"
        
        sx={{ p: 0, height: "860px", width: "100%", backgroundColor: 'white'}}
        
        >

          <Grid
          container
          spacing={0}
          direction="column"
          alignItems="center"
          justifyContent="center"

          sx={{ p: 0, height: "100%", width: "40%", backgroundColor: '#a9c7f7'}}>
            <LottieRender></LottieRender>
          </Grid>

        <Grid item style={{ width: "60%", height: "100%" }}
          container
          spacing={0}
          direction="column"
          
          justifyContent="center"

        >
          <Grid item sx={{ p: 1 }}>
            <StandaloneToggleButton esg="Business Ethics"></StandaloneToggleButton>
            {/* <Button variant="outlined" size="large" style={{ width: "100%" }} onClick={changeButtonColor(this)} > Option 1 </Button> */}
          </Grid>

          <Grid item sx={{ p: 1 }}>
            <StandaloneToggleButton esg="Socail">HHH</StandaloneToggleButton>
          </Grid>

          <Grid item sx={{ p: 1 }}>
            <StandaloneToggleButton esg="ENV">HHH</StandaloneToggleButton>
          </Grid>

          <Grid item sx={{ p: 1 }}>
            <StandaloneToggleButton esg="media">HHH</StandaloneToggleButton>
          </Grid>
          <Grid item sx={{ p: 1 }}>
            <StandaloneToggleButton esg="?">HHH</StandaloneToggleButton>
          </Grid>

          <Grid item sx={{ p: 1 }}>
            <StandaloneToggleButton esg="??">HHH</StandaloneToggleButton>
          </Grid>

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
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
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




export default Values;
