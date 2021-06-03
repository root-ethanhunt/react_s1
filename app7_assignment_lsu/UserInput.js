import {React,Component} from "react";

export class UserInput extends React.Component {

          constructor(props){
              super(props)

          }
          handleChange(event){
              this.props.passName(event.target.value);
          }
    


          render(){
            
                return(

                   <div>
                       Please enter your name:<br></br>
                       <input type="text"  onChange={this.handleChange} ></input>

                   </div>


                )


          }





}