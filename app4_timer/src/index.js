import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import {Timer} from './Timer';
import {Timer1 }from './Timer1';
import * as serviceWorker from './serviceWorker';

//first timer

//ReactDOM.render(<Timer />, document.getElementById('root'));

//Second timer with data flow down

ReactDOM.render(<Timer1 />,document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
