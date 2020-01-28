import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {Toggle} from './Toggle';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
        
           <Toggle />
        </header>
      </div>
    );
  }
}

export default App;
