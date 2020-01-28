import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import LoaderHOC from './LoderHOC'

var AppHeader = function(props) {
  return <h1>{props.headerText}</h1>;
};

var LoadingHeader = LoaderHOC('headerText')(AppHeader);


class App extends React.Component {
  state = { headerText: null };

  componentDidMount() {
    setTimeout(() => {
      this.setState({headerText: "I am the app header..."})
    }, 3000)
  }

  render() {
    return (
      <LoadingHeader headerText={this.state.headerText} />
    );
  }
}

//ReactDOM.render(<App />, document.getElementById('app'));
export default App;