import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { shadows } from '@mui/system';

import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      bgColor: ""
    }
  }


  boxClick = (e) => {
    this.setState({
      bgColor: "red"
    })
  }

  render() {
    return (
      <div className="App">


        <article className='experimentsHolder'>
          <h2>Test 3</h2>
          <p>This is an example of an onClick event 'renderd' by react.</p>
          <div className="boxClickCss"
            style={{ backgroundColor: this.state.bgColor }}
            onClick={this.boxClick}>Click Me!</div>
        </article>

      </div>
    );
  }
}


function changeButtonColor(button) {
  console.log("Hello");
}

function Values() {
  return (
    <div className="App">
        <Grid 
        container 
        spacing={0}
        direction="row"
        alignItems="center"
        justifyContent="center"
        sx={{ p: 30, backgroundColor: 'white'}}
        >

        <Grid item style={{ width: "40%", height: "100%"}} sx={{ backgroundColor: 'blue' }}>
          <Grid item sx={{ p: 1 }}>
            <Button variant="outlined" size="large" style={{ width: "100%" }} onClick={changeButtonColor(this)} > Option 1 </Button>
          </Grid>
        </Grid>  
          

        <Grid item style={{ width: "50%" }}>
                <Grid item sx={{p: 1}}>
            <Button variant="outlined" size="large" style={{ width: "100%" }} onClick={changeButtonColor(this)} > Option 1 </Button>
                </Grid>

              <Grid item sx={{ p: 1 }}>
                <Button variant="outlined" size="large" style={{ width: "100%" }}> Option 2 </Button>
              </Grid>

          <Grid item sx={{ p: 1 }}>
            <Button variant="outlined" size="large" style={{ width: "100%" }}> Option 3 </Button>
          </Grid>

          <Grid item sx={{ p: 1 }}>
            <Button variant="outlined" size="large" style={{ width: "100%" }}> Option 4 </Button>
          </Grid>
          <Grid item sx={{ p: 1 }}>
            <Button variant="outlined" size="large" style={{ width: "100%" }}> Option 5 </Button>
          </Grid>

          <Grid item sx={{ p: 1 }}>
            <Button variant="outlined" size="large" style={{ width: "100%" }}> Option 6 </Button>
          </Grid>
 
            </Grid>
        </Grid>
    </div>
  );
}





export default Values;
