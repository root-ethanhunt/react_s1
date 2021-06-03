import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';

class App extends Component {
   constructor(props){
     super(props)
      
     this.state={ctr:0}
         this.incrementCtr = this.incrementCtr.bind(this);



     console.log("hi");
   }

     incrementCtr(){
       this.setState({ctr:this.state.ctr+1})
     }
  render() {
    return (
      <div className="App">
        <button onClick = {this.incrementCtr}   >Click</button>
       You clicked for {this.state.ctr} times
      </div>
    );
  }
}

export default App;
