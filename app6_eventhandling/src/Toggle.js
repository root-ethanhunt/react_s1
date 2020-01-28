import React,{Component} from 'react';

export class Toggle extends Component{

    constructor (props){
        super(props);
        this.state = {
            isFlagTrue : true        }
        this.handleClick = this.handleClick.bind(this);
    }
   
    handleClick(){
        console.log('click');
        this.setState(state=>({ isFlagTrue : ! state.isFlagTrue}));


    }

   render(){
       return (<div> 
              <h1>Toggle Button</h1>
           <button onClick={this.handleClick}>{this.state.isFlagTrue ? 'Yes': 'No'}</button></div>)
   //  return (<div> <button onClick={this.handleClick}>hi</button></div>)
   }

      /*
       <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
   */





} 