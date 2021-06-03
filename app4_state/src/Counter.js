import React,{Component} from 'react';

export class Counter extends Component {

   constructor (props){
       super(props);
       this.state = {
        ctr:0 
       }
       this.incrementCtr = this.incrementCtr.bind(this);
   }
    render(){
       return(
       <div>
           <p>Welcome {this.props.user} </p>
         <button onClick={this.incrementCtr}>Click</button>

         You clicked : {this.state.ctr} times

       </div>)

  
   }




   
   incrementCtr(){

       console.log('in increment');
       this.setState({ ctr: this.state.ctr + 1});
  }
   


}

