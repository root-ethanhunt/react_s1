import React, { Component } from 'react';

class FormattedDt extends Component{

constructor(props){
    super(props);
}
render(){
return(
   <h1> {this.props.fdt.toLocaleDateString()} </h1> 
)
}

}


