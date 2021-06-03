import React,{Component} from 'react';
export class Temp_Convert extends Component{

        constructor(props){
            super(props);
            this.state={
                tempC:0
            }
            this.handleChange = this.handleChange.bind(this);
        }
handleChange(event){
    console.log('changed'+ event.target.value);
  this.setState({tempC:event.target.value}) ;

}
render(){
    return <div>
        <input name="temp" value={this.tempC} onChange={this.handleChange}></input>
        Temp you entered: { this.state.tempC}
    </div>
}


}