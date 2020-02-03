import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
   
function App(props){
  
  return <h1>Hello World... { props.name} </h1>

}

ReactDom.render(<App name='abc' />,document.getElementById('root'));






/*
class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
         
         
         
            Hello  ....Welcome to React World!!!
          
        </header>
       
      </div>
    );
  }
}
*/
export default App;




