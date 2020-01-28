import React, { Component } from 'react';
import logo from './logo.svg';
import SimpleEvent from './simpleevent'
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         Event Handling
         <SimpleEvent  />
        </header>
      </div>
    );
  }
}

export default App;
