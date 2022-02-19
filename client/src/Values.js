import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

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

      variant="outlined" size="large" style={{ width: "100%" }}
      color="success"
    >
      {props.esg}
      </ToggleButton>
  );
}

function Values() {
  return (
    <div className="App">
        <Grid 
        container 
        spacing={3}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 1, height: "100%", width: "100%"}}
        
        >

        <Box
          component="img"
          sx={{
            height: "200%",
            width: "35%",
          }}
          alt="The house from the offer."
          src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2"
        />

        <Grid item style={{ width: "65%", height: "100%"}}>
                <Grid item sx={{p: 1}}>
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




export default Values;
