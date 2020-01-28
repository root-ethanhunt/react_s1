import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import {Welcome} from './Welcome.js';
import * as serviceWorker from './serviceWorker';

//Demo 0 without props

//ReactDOM.render(<Welcome/>, document.getElementById('root'));

//* Demo 1 for props
ReactDOM.render(<Welcome name='Sara' />, document.getElementById('root'));

//* Demo 2 for props
/*ReactDOM.render(<div><Welcome name='Sara' /><br></br>
<Welcome name='Meenal' /><br></br>
<Welcome name='Geet1' /><br></br></div>, document.getElementById('root'));
*/

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

