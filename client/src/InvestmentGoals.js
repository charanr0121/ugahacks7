import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import {Link} from "react-router-dom";
import { shadows } from '@mui/system';
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Lottie from 'react-lottie';
import animationData from './lotties/lf30_editor_ohsolr8d.json';



import './App.css';
const marks = [
    {
        value: 0,
        label: '1 to 3' ,
    },
    {
        value: 50,
        label: '3 to 7',
    },
    {
        value: 100,
        label: '7+ ', 
    },

];

function valuetext(value) {
    return `${value}°C`;
}

function valueLabelFormat(value) {
    return marks.findIndex((mark) => mark.value === value) + 1;
}


export function DiscreteSliderValues() {
    return (
        <Box sx={{ width: 600, size: "small"}}>
            <Slider
                aria-label="Restricted values"
                defaultValue={1}
                valueLabelFormat={valueLabelFormat}
                getAriaValueText={valuetext}
                step={null}
                marks={marks}
                
            />
        </Box>
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
                height={400}
                width={600}
            />
        </div>
    );
}

function InvestmentGoals() {
  return (
    <div className="App">
          <Grid
              container
              spacing={0}
              direction="row"

              sx={{ p: 0, height: "860px", width: "100%", backgroundColor: 'white' }}
              >

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ p: 0, height: "100%", width: "40%", backgroundColor: '#a9c7f7'}}>
                    <h2>How many years do you plan on investing?</h2>
                </Grid>

                <Grid item style={{ width: "60%", height: "100%" }}
                    container
                    spacing={0}
                    direction="column"
                    justifyContent="center"
                    alignItems="center"   
                >   
                  <Grid item sx={{ p: 1 }}>
                        <LottieRender></LottieRender>
                    </Grid>

                  <Grid item sx={{ p: 5 }}>
                        <DiscreteSliderValues></DiscreteSliderValues>
                    </Grid>

                  <Grid item sx={{ p: 1 }}>
                      <h1>Mid Term Investing</h1>
                  </Grid>

                            {/* Next Button */}
          <Grid item sx={{ p: 1 }}></Grid>
          <Link to="/portfolio">
              <Button>
               NEXT
              </Button>
            </Link>

              </Grid>   
        </Grid>


    </div>
  );
}



export default InvestmentGoals;
