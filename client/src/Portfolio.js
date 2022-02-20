import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Stock from "./Stock";

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

    const [tick, setTick] = React.useState("AAPL");

    return (
        <div className="App" sx={{ p: 0, height: "100%", width: "100%", }}>
            <Grid
                container
                spacing={0}
                direction="row"

                sx={{ p: 0, height: "700px", width: "100%", backgroundColor: 'red' }}

             >
                {/* col container for stock pick */}


                
                <Grid item style={{ width: "60%", height: "100%", backgroundColor:'#48bfc4'}}
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
                        sx={{ p: 0, height: "20%", width: "100%", backgroundColor: '#48bfc4' }}>


                        <Grid item sx={{ p: 1 }}>
                            <Button variant="outlined" onClick={()=> { setTick("BLNK")
                        console.log(tick)}} >BLNK</Button>

                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                        <Button variant="outlined" onClick={()=> { setTick("MRNA")
                        console.log(tick)}} >MRNA</Button>
                            {/* <StandaloneToggleButton esg="2" ticker="MRNA" >HHH</StandaloneToggleButton> */}
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                        <Button variant="outlined" onClick={()=> { setTick("MTCH")
                        console.log(tick)}} >MTCH</Button>
                        </Grid>


                    </Grid>

                    {/* row two */}
                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="center"
                        sx={{ p: 0, height: "20%", width: "100%", backgroundColor: '#48bfc4' }}>

                        <Grid item sx={{ p: 1 }}>
                        <Button variant="outlined" onClick={()=> { setTick("AVNW")
                        console.log(tick)}} >AVNW</Button>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                        <Button variant="outlined" onClick={()=> { setTick("HEAR")
                        console.log(tick)}} >HEAR</Button>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                        <Button variant="outlined" onClick={()=> { setTick("CTRN")
                        console.log(tick)}} >CTRN</Button>
                        </Grid>

                    </Grid>


                    {/* row three */}

                    <Grid
                        container
                        spacing={0}
                        direction="row"
                        justifyContent="center"
                        sx={{ p: 0, height: "20%", width: "100%", backgroundColor: '#48bfc4' }}>

                        <Grid item sx={{ p: 1 }}>
                        <Button variant="outlined" onClick={()=> { setTick("ARCB")
                        console.log(tick)}} >ARCB</Button>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                        <Button variant="outlined" onClick={()=> { setTick("NVDA")
                        console.log(tick)}} >NVDA</Button>
                        </Grid>

                        <Grid item sx={{ p: 1 }}>
                        <Button variant="outlined" onClick={()=> { setTick("FOSL")
                        console.log(tick)}} >FOSL</Button>
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

                        <Stock ticker={tick}/>


                </Grid>

                       
                

                </Grid>
        </div>
    );
}


export default Portfolio;
