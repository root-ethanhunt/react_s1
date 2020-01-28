import React, { Component } from 'react';

export default class SimpleEvent extends Component{

    constructor(props){
        super(props);
        this.state ={
            counter:0
        }
        this.handleClick = this.handleClick.bind(this);
    }
    
    
    handleClick(){
        this.setState({counter:this.state.counter +1});
    }
    
    
    render(){
 
        return(

          <div><button onClick={this.handleClick}>Click Me</button>
          <div><button onClick={()=>this.setState({counter:this.state.counter+1})}>click for arrows</button></div>
            
          <h3>Thanks for clicking button{this.state.counter} times</h3>
          </div>

        )


    }
}