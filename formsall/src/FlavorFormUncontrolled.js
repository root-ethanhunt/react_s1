import React, { Component } from 'react';
export default class FlavorFormUncontrolled extends Component{
    constructor(props) {
        super(props);
        this.input = React.createRef();    
      //  this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
      }
  
      handleSubmit(event) {
        alert('Your favorite flavor is: ' + this.input.current.value);
        event.preventDefault();
      }
    
      render() {
        return (
          <form onSubmit={this.handleSubmit}>
            <h1>Flavor Form Uncontrolled :</h1>
            <label>
              Pick your favorite La Croix flavor:
              <select  ref = {this.input}  value = {this.input.value}  >
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
