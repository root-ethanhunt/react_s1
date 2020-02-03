import React, { Component } from 'react';
export default class FlavorFormUncontrolled extends Component{
    constructor(props) {
        super(props);
        this.input = React.createRef();    
      //  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
    
      // handleChange(event) {
      //   this.setState({value: event.target.value});
      //   alert('Your favorite flavor is: ' + this.state.value+'Callback so gets invoked immediately');
        
      // }
    
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.input.current.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <label>
              Pick your favorite La Croix flavor:
              <select  ref = {this.input}  value = {this.input.value} onChange={this.handleChange}>
                <option value="grapefruit">Grapefruit</option>
                <option value="lime">Lime</option>
                <option value="coconut">Coconut</option>
                <option value="mango">Mango</option>
              </select>
            </label>
            <input type="submit" value="Submit" />
          </form>
        );
      }
    
    }
