import React, { Component } from 'react';

 export class FormattedDt extends Component {
         
       constructor(props){
         super(props);
         this.state={date:new Date()}
        
       }
  
  tick() {
       
       this.setState({date:new Date()})
   //return (<FormattedDt date={new Date()} />);
 }

render(){
           setInterval(() => this.tick(), 1000);
return(
   <h1> Today is : {this.state.date.toLocaleString()}</h1> 
)
}
   

}

/*function FormattedDt(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }*/

  
 