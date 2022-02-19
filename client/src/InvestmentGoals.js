import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { shadows } from '@mui/system';
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Lottie from 'react-lottie';
import animationData from './lotties/lf20_q9mzugao.json';



import './App.css';
const marks = [
    {
        value: 0,
        label: '1 to 3',
    },
    {
        value: 50,
        label: '3 to 7',
    },
    {
        value: 100,
        label: '7',
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
        <Box sx={{ width: 600 }}>
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
        spacing={2}
        direction="column"
        alignItems="center"
        justifyContent="center"
        sx={{p: 3}}>
            <LottieRender></LottieRender>
            <DiscreteSliderValues></DiscreteSliderValues>       
        </Grid>


    </div>
  );
}



export default InvestmentGoals;
