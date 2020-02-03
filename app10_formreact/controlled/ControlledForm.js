import React, { Component } from 'react';
export default class ControlledForm extends Component{
    constructor(props){
        super(props);
        this.state ={value:''}
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleChange= this.handleChange.bind(this);
    }

    handleChange(event){
       console.log("handleCHange")
       this.setState({value:event.target.value});
    }
    handleSubmit(event){
        console.log("handleSubmit")
        event.preventDefault();
    }
    render(){

        return(<div><form onSubmit={this.handleSubmit}>
             <label>Name</label> 
              <input value={this.state.value}  onChange={this.handleChange}></input>
              <input type ='submit'  ></input>      
            </form>
            <h3>You have entered:{this.state.value}</h3>
        </div>)
    }
}