import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Stock from "./Stock";

import Signup from './Signup'
import reportWebVitals from "./reportWebVitals";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/about" exact element={<About />} />
        <Route path="/stock" exact element={<Stock />} />

        {/* <Route path="/" exact element={<App />} /> */}
         <Route path="/" exact element={<Signup />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
