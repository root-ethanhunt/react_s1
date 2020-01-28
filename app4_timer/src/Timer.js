import React, { Component } from 'react';


export class Timer extends Component{

   constructor(props){
       super(props);
       this.state = {
           date: new Date()}
   }

   tick(){

    this.setState({date : new Date()});

   }
   componentDidMount(){
       this.timeId = setInterval(()=>this.tick(),1000);
   }
   componentWillUnmount(){
       clearInterval(this.timeId);
   }
   render(){
       return (<h1>Today is {this.state.date.toLocaleTimeString()}</h1>)
   }

}

