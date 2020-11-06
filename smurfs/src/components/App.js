import React, { Component } from "react";
import "./App.css";

import Smurfs from "../components/Smurfs";
import SmurfForm from "../components/SmurfForm";

import Typography from '@material-ui/core/Typography';
class App extends Component {
  render() {
    return (
      <div className="App">
        <Typography variant="h2">SMURFS! W/Redux</Typography>
        <Typography variant="h6">Welcome to your state management version of Smurfs!</Typography>
    
        <SmurfForm />
        <Smurfs />
      </div>
    );
  }
}

export default App;
