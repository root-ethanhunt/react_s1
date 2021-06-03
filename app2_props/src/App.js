import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';

function BoilingVerdict(props)
{
   if(props.temp>100)
     return(<p>Water will boil</p>)
   else
    return(<p>Water will not boil</p>)
}
export class App extends Component{
        
  constructor(props)
  {
    super(props)
    
    this.state={temp:0}
    
    this.handleChange =this.handleChange.bind(this)
  }
  handleChange(event)
  {
   this.setState({temp:event.target.value})
    console.log('changed'+ event.target.value);
  }  
  render()
  {
     const temperature =this.state.temp;
    // const scale = this.props.scale;
   
    return(
     <div>
      <input type='number' value ={temperature} 
        onChange={this.handleChange} /><br></br>
        <BoilingVerdict temp={temperature}   />
      </div>
       

        )
  }
}





