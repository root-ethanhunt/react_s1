import React, { Component } from 'react';

 export class FormattedDt extends Component {


render(){
return(
   <h1> Today is : {this.props.date.toLocaleDateString()}</h1> 
)
}
   

}

/*function FormattedDt(props) {
    return <h2>It is {props.date.toLocaleTimeString()}.</h2>;
  }*/