import TextField from '@mui/material/TextField';
// import Button from '@mui/material/Button';
// import Grid from '@mui/material/Grid';
// import Iframe from 'react-iframe'
import axios from 'axios';
import React from "react";

// import TextField from '@mui/material/TextField';
// import Box from '@mui/material/Box';
// import Grid from '@mui/material/Grid';
// import Button from '@mui/material/Button';


import './App.css';

const auth = null;
const user = null

export default class Stock extends React.Component{
  state = {
    data: []
  }

  componentDidMount() {
    axios.get(`http://localhost:5000/stock/goog`)
      .then(res => {
        const data = res.data;
        this.setState({ data });
        for (var i = 0; i < data.length; i++){
          console.log(data[i])
        }
      })
  }

  render() {
    return (
      <div className="App">
        {this.state.data}
        {/* <Iframe width="1000" height="500" url="https://datastudio.google.com/embed/reporting/916064de-74e2-4d73-ab71-b0603b6399d1/page/p_k5sn4dkcsc?params=%7B%22df7%22:%22include%25EE%2580%25800%25EE%2580%2580IN%25EE%2580%2580GOOG%22%7D" frameborder="0" style="border:0" allowfullscreen>d</Iframe> */}
      </div>
    );
  }
}


// export default Stock;
