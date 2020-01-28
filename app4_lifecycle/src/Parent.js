import React,{ Component } from "react";

import ColorBlock from "./ColorBlock";
import { Child1 } from "./Child1";
var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

export class Parent extends Component {

        constructor(props){
            super(props);
            this.state ={
                counter: 0
            }
            console.log("Constr-P"+ this.state.counter);
        }

     componentWillMount(){
        this.settingState();
        
         console.log("Comp Will Mount-P");
     }

     settingState(){
         this.setState({ counter: this.state.counter + 1});
         console.log("ctr:"+this.state.counter);
     }
  
     componentDidMount(){
        //this.settingState();
        console.log("Comp did Mount -P");

     }

    
     componentWillReceiveProps(){
       // this.settingState();
        console.log("will receive props -P"); 
     }
     /*
     shouldComponentUpdate( nextProps, nextState){
           
        //this.settingState();
        console.log("should comp update-P");
       return( this.state.counter === nextState.counter )
     
     }
     componentWillUpdate(){
       // this.settingState();
         console.log("comp will update-P");
             }
     componentDidUpdate(){
       // this.settingState();
        console.log("comp did update-P");
     }  */      
    render(){

       // this.settingState();
        console.log("render p");
       
        return(
                <div>
                   
              <div  style={{backgroundColor: bgColors.Blue}} padding="1rem">
                             
                      Parent   <h1>{this.state.counter}</h1>           
              </div>

              <Child1 />
             
              </div>

        );

    }; 
    


}