import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import About from "./About";
import Stock from "./Stock";
import Home from "./home";
import Signup from './Signup'
import Values from './Values'
import InvestmentGoals from './InvestmentGoals'
import reportWebVitals from "./reportWebVitals";
import Portfolio from "./Portfolio";

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path="/about" exact element={<About />} />
        <Route path="/" exact element={<Home />} />
        <Route path="/Home" exact element={<Home />} />
        <Route path="/Signup" exact element={<Signup />} />
        <Route path="/Values" exact element={<Values />} />
        <Route path="/stock" exact element={<Stock ticker={"GOOG"}/>} />
        <Route path="/InvestmentGoals" exact element={<InvestmentGoals/>} />
        <Route path="/Portfolio" exact element={<Portfolio/>} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
