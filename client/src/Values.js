import Checkbox from '@mui/material/Checkbox';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import FormGroup from '@mui/material/Grid';

import Button from '@mui/material/Button';
import * as React from 'react';
import ToggleButton from '@mui/material/ToggleButton';
import FormControlLabel from '@mui/material/FormControlLabel';
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

  const [checkedState, setCheckedState] = useState(
    new Array(16).fill(false)
  );

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
          <form onSubmit={handleSubmit}>
            <FormGroup >
              <Grid container spacing={2} columns={12}   justifyContent="space-between">
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Ethical Busines" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Education" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Data Privacy" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Following Regulation" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Anti-pollution" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Equity" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Sustainability" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Transparency" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Carbon Footprint" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Worker Rights & Protection" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Anti-corruption" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Environmental Impact" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Human Rights" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Supplier Sustainability" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Land Preservation" /> </Grid>
                <Grid item xs={"auto"}> <FormControlLabel control={<Checkbox  />} label="Sustainable Products" /></Grid>
              </Grid>
            </FormGroup>
          </form>

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
