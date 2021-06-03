import React, { Component } from 'react';
export default class UncontrolledComp extends Component{
    constructor(props){
        super(props);
       
        this.handleSubmit=this.handleSubmit.bind(this);
        this.input =React.createRef();
       this.handleChange= this.handleChange.bind(this);
    }
 
    handleSubmit(event) {
        alert('A name was submitted: ' + this.input.current.value);
        event.preventDefault();
      }

      handleChange(event){
          console.log(event.target.value);
      }
  
    render(){

        return(<div><form onSubmit={this.handleSubmit}>
             <label>Name</label> 
              <input type ='text' ref = {this.input} onChange={this.handleChange} ></input>
              <input type ='submit'  ></input>      
            </form>
            {/* cant use like : <h3>You have entered:{this.input}</h3> */}  
        </div>)
    }
}