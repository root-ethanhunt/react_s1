import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props){
     super(props)
     
     console.log("hi");
   }


  render() {
    return (
      <div className="App">
        <h1>Hello World....from first React class .. {this.props.name1}...</h1>
      </div>
    );
  }
}

export default App;
