import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TempCalc} from './TempCalc';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
         <TempCalc />
        </header>
      </div>
    );
  }
 
 
}

export default App;
