import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import WrappedComponent from './wrappedcomponent';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <WrappedComponent />
        </header>
      </div>
    );
  }
}

export default App;
