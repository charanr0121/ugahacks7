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
            <div>
            <h2>{props.esg}</h2>
            </div>
            {/* <br></br> */}
            <div>
            {props.ticker}

            </div>
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
                            <StandaloneToggleButton esg="3" ticker="BLNK" >HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="2" ticker="MRNA" >HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="4" ticker="MTCH" >HHH</StandaloneToggleButton>
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
                            <StandaloneToggleButton esg="3" ticker="AVNW" >HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="3" ticker="HEAR" >HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="4" ticker="CTRN" >HHH</StandaloneToggleButton>
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
                            <StandaloneToggleButton esg="4" ticker="ARCB" >HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="4" ticker="NVDA" >HHH</StandaloneToggleButton>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                            <StandaloneToggleButton esg="4" ticker="FOSL" >HHH</StandaloneToggleButton>
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
