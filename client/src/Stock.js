import TextField from "@mui/material/TextField";
// import Button from '@mui/material/Button';
import Grid from "@mui/material/Grid";
// import Iframe from 'react-iframe'
import axios from "axios";
import React from "react";

import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';


// import * as V from "victory";
// import { VictoryChart } from "victory";
// import { VictoryLine } from "victory";
// import { VictoryTheme } from "victory";

// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';

import "./App.css";

const auth = null;
const user = null;

export default class Stock extends React.Component {
  state = {
    data: [],
  };
  componentDidUpdate() {
    console.log(this.props.ticker)

    axios.get('http://localhost:5000/stock/'+this.props.ticker).then((res) => {
      const data = res.data;
      // console.log(data)
      this.setState({ data });
      for (var i = 0; i < data.length; i++) {
        // console.log(data[i]);
      }
    });
  }

  render() {
    return (
      <div className="App">
        {/* <Grid
          container
          spacing={2}
          direction="column"
          alignItems="center"
          justifyContent="center"
          sx={{ p: 3 }}
        > */}

{/* <ResponsiveContainer width="100%" height="100%"> */}
        <LineChart
          width={500}
          height={300}
          data={this.state.data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="x" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="y" stroke="#8884d8" activeDot={{ r: 8 }} />
          {/* <Line type="monotone" dataKey="uv" stroke="#82ca9d" /> */}
        </LineChart>
      {/* </ResponsiveContainer> */}

        {/* </Grid> */}
      </div>
    );
  }
}

// export default Stock;
