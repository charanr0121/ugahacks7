import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { shadows } from '@mui/system';
import * as React from 'react';
import Slider from '@mui/material/Slider';
import Lottie from 'react-lottie';
import animationData from './lotties/lf30_editor_ohsolr8d.json';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import ToggleButton from '@mui/material/ToggleButton';




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

            variant="outlined" size="small" style={{ width: "75px", height: "75px"}}
            color="primary"
        >
            {props.esg}
            {"\n"}
            {"Ticker"}
        </ToggleButton>
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

function Portfolio() {
    return (
        <div className="App" sx={{ p: 0, height: "100%", width: "100%", }}>
            <Grid
                container
                spacing={0}
                direction="row"

                sx={{ p: 0, height: "700px", width: "100%", backgroundColor: 'red' }}

             >
                {/* col container for stock pick */}


                
                <Grid item style={{ width: "60%", height: "100%", backgroundColor:'blue'}}
                    container
                    spacing={0}
                    direction="column"
                    justifyContent="center" 
                >

                    {/* row one */}

                    <Grid 
                    container
                        spacing={0}
                        direction="row"
                        justifyContent="center" 
                        sx={{ p: 0, height: "20%", width: "100%", backgroundColor: 'white' }}>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="00S1">HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="00S2">HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="00S3">HHH</StandaloneToggleButton>
                        </Grid>


                    </Grid>

                    {/* row two */}
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="center"
                        sx={{ p: 0, height: "20%", width: "100%", backgroundColor: 'white' }}>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="00S4">HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="00S4">HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="00S5">HHH</StandaloneToggleButton>
                        </Grid>

                    </Grid>


                    {/* row three */}

                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="center"
                        sx={{ p: 0, height: "20%", width: "100%", backgroundColor: 'white' }}>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="00S6">HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="00S7">HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="00S8">HHH</StandaloneToggleButton>
                        </Grid>

                    </Grid>



                </Grid>

                <Grid
                    container
                    spacing={0}
                    direction="column"
                    alignItems="center"
                    justifyContent="center"
                    sx={{ p: 0, height: "100%", width: "40%", backgroundColor: 'white' }}>
                    <h1> Stock Ticker</h1>
                    <h2> small text</h2>
                </Grid>

                       


                </Grid>
        </div>
    );
}


export default Portfolio;
