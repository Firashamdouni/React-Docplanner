import React, { Component } from 'react';
import Hello from "./header";
import Header1 from "./header1";
import Fade from "./fade-section";
import Brands from  "./brands";
import Stats from "./stats";
import Offices from "./offices";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Animated} from "react-animated-css";
import './App.css';


class App extends Component {
  render() {
    return (
      <div className="App">
        < Hello />
        < Header1 />
          <Fade />
        < Brands />
        < Stats />
        < Offices />
      
      </div>
    );
  }
}

export default App;
