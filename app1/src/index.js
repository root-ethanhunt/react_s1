import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

//Demo 1 : Intro to JSX
ReactDOM.render(<h1>Hello World !!!</h1>,document.getElementById('root'));
//************************************ */
//Demo 2 : Using expressions
/*const name = 'Sangeeta Joshi';
const element = <h1>Hello,{name}</h1>
ReactDOM.render(element,document.getElementById('root'));*/
//************************************** */
//Demo3 : Using expressions
/*const element = <h1>2+2={2+2}</h1>
ReactDOM.render(element,document.getElementById('root'));*/
//************************************** */
//Demo4 : invoke a function in jsx
/*
  function formatName(user){
      return user.fName + '' + user.lName;
  }

  const user = {
      fName:'Sangeeta',
      lName:'Joshi'
  }*/
  /*
  const element = (
         <h1>Hello, { formatName(user) }</h1>
         );

   ReactDOM.render(element,document.getElementById('root'));*/

//************************************** */
//Demo5 : jsx is expression too .can be returned,passed as param etc.
/*function greet(user){
   if(user)
       return (<h1>Hello {formatName(user)}</h1>)
    else 
        return(<h1>Helllo Stranger !</h1>)

}
const element = greet(user);
ReactDOM.render(element,document.getElementById('root'));*/
//************************************** */
//Demo6 : Specifiying attributes with JSX.
/*
const user1 = {
    fName:'Donald',
    lName:'Duck',
    avatarUrl:'donaldDuck.jpg'   //put image in public folder
}

const element =<div> <h1>This is {formatName(user1)}</h1>
<img alt=''src={user1.avatarUrl}></img> </div>
 ReactDOM.render(element,document.getElementById('root'));*/
//************************************** */
//Demo6 : Specifiying attributes with JSX.
                                          

           
                     
                     //************************************** */
                     //Demo7: Specifiying attributes with JSX.

//ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
