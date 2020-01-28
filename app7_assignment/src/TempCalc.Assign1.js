import React,{Component} from 'react';
import  {TempInput}  from './TempInput';

function BoilingVerdict(props)
{
   if(props.temp>100)
     return(<p>Water will boil</p>)
   else
    return(<p>Water will not boil</p>)
}
function TempConverter(props){
  if (props.unit == 'C')
      return (<p>Temp in Fahrenheit : {props.temp}</p>);
      if (props.unit == 'F')
  return (<p>Temp in Centigrade : {props.temp}</p>);
   else
   return ( <p>Enter temp in appropriate box</p>);

}
export class TempCalc1 extends React.Component
{
   constructor(props)
   {
     super(props)
     this.state ={scale:'',temp:'',tempC:'',tempF:''}
     this.handleTemp = this.handleTemp.bind(this)
     
   }
  
   handleTemp(val,sc)
  {
    
   // console.log('invoked'+val+sc)
    if(sc=='C')
      {
        // this.setState({temp:val,tempV :(val*1.8 +32),tempC:val})
         this.setState({ tempC : val ,tempF:0,scale:sc})
      }
    if(sc=='F')
      {
        // this.setState({temp:val,tempC : ((val-32)/1.8),tempV:val})
        //this.setState({scale:sc})
        this.setState({ tempF : val,tempC : 0,scale:sc})
      }
    
    
  }
   render()
   {
      // this.setState({temp:this.props.temp,scale:this.props.scale})
    
      const temperature = this.state.temp; 
     //const unit1 = this.state.scale;
      //const CTemp1 = this.state.tempC;
      //const FTemp2 = this.state.tempV;
      const fTemp1 = (this.state.tempC * 1.8) + 32;
      const cTemp1 = (this.state.tempF - 32)/1.8;
     return(
            
        <div>
          Enter temp in degree celsius
        <TempInput onTempChange={this.handleTemp} scale='C' />
        Enter temp in degree Fahrenheit
        <TempInput  onTempChange={this.handleTemp} scale='F' />
        
        <TempConverter temp={this.state.scale == 'C' ? fTemp1 : cTemp1}  unit = {this.state.scale}/>
         </div>
     
     
     )
     
   }


}