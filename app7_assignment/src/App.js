import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {TempCalc1} from './TempCalc.Assign1';

class App extends Component {
  render() {
    return (
      <div className="App">
      <header className="App-header">
       <TempCalc1 />
      </header>
    </div>
      
    );
  }
}

export default App;

