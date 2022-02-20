import logo from './logo.svg';
import './App.css';
import Button from '@mui/material/Button';
import { createTheme } from '@mui/material/styles';
import { orange } from '@mui/material/colors';

const theme = createTheme({
  status: {
    danger: orange[500],
  },
});


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Button variant="contained">Hello World</Button>
    </div>
  );
}

export default App;
