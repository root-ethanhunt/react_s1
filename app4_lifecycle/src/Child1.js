import React,{ Component } from "react";

import ColorBlock from "./ColorBlock";
var bgColors = { "Default": "#81b71a",
                    "Blue": "#00B1E1",
                    "Cyan": "#37BC9B",
                    "Green": "#8CC152",
                    "Red": "#E9573F",
                    "Yellow": "#F6BB42",
};

export class Child1 extends Component {

    constructor(props){
        super(props);
        console.log("Constr-C");
    }

 componentWillMount(){
     console.log("Comp Will Mount-C");
 }

 componentDidMount(){
    console.log("Comp did Mount -C");
 }

 componentWillReceiveProps(){
    console.log("will receive props -C"); 
 }
 shouldComponentUpdate(){
    console.log("should comp update-C");
}
componentWillUpdate(){
    console.log("comp will update-C");
        }
componentDidUpdate(){
   console.log("comp did update-C");
}        
    
    render(){
          console.log("render C");
        return(
                
                   
              <div  style={{backgroundColor: bgColors.Yellow}} padding="1rem">
                             
                      Child1              
              </div>
             
              

        );

    }; 
    


}