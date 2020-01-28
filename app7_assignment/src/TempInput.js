import React,{Component} from 'react';
export class TempInput extends React.Component
{
  constructor(props)
  {
    super(props)
    
    this.handleChange =this.handleChange.bind(this)
  }
  handleChange(event)
  {
   // this.setState({this.temp=event.target.value})
    //this.props.onTemperatureChange(e.target.value);
    //this.props.changedValue=event.target.value;
    console.log('changed'+ event.target.value);
    console.log(this.props.scale);
    this.props.onTempChange(event.target.value,this.props.scale);
    console.log(""+this.props.scale)
  }
  
  render()
  {
     const temperature =this.props.temp;
     const scale = this.props.scale;
   
    return(
     <div>
      <input type='number' value ={temperature} scale='C'
        onChange={this.handleChange} />
      </div>
        )
  }
}