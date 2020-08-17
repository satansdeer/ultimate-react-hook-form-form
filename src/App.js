import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Step1 } from "./Step1";
import { Step2 } from "./Step2";
import { Step3 } from "./Step3";
import { Result } from "./Result";
import {Header} from './components/Header'

function App() {
  return (
    <>
      <Header />
      <Router>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/result" component={Result} />
      </Router>
    </>
  );
}

export default App;
