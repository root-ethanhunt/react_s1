import React,{Component} from 'react';
import  {TempInput}  from './TempInput';

function BoilingVerdict(props)
{
   if(props.temp>100)
     return(<p>Water will boil</p>)
   else
    return(<p>Water will not boil</p>)
}
export class TempCalc extends React.Component
{
   constructor(props)
   {
     super(props)
     this.state ={scale:'',temp:'',tempC:'',tempV:''}
     this.handleTemp = this.handleTemp.bind(this)
     
   }
  
   handleTemp(val)
  {
    
    console.log('invoked'+val)
   
      
         this.setState({temp:val})
        // this.setState({scale:sc})
      
    
    
  }
   render()
   {
      //  this.setState({temp:this.props.temp,scale:this.props.scale})
    
      const temperature = this.state.temp; 
     
     return(
            
        <div>
            Enter Temp in Degree Centigrade :
        <TempInput onTempChange={this.handleTemp}  />
        
        <BoilingVerdict temp={temperature} />
         </div>
     
     
     )
     
   }


}