import {React,Component} from "react";

export class Parent extends React.Component {
constructor(props){
    super(props)

}
handleName(){
    this.setState({uname:val})
}

render(){
  
      return(

         <div>
             <UserInput passName={this.handleName}/>
         </div>


      )


}





}