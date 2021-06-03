import React, { Component } from 'react';
//import FormattedDt from './FormattedDt' ;
import  {FormattedDt } from './FormattedDt' ;
export class Timer1 extends Component{

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
       console.log("unmount");
       clearInterval(this.timeId);
   }
   render(){
       return (
            <div>
                 <FormattedDt  date = {this.state.date}    ></FormattedDt>
                
                    <h1>Its {this.state.date.toLocaleTimeString()}</h1>
       
               
       
       
            </div>
       
       )
   }

}

//export default Timer1;

