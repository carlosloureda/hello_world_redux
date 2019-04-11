import React, { Component } from "react";
// import logo from './logo.svg';
// import './App.css';
import HelloWorld from "./components/HelloWorld";

class App extends Component {
  state = {
    name: "Everyone"
  };
  render() {
    return <HelloWorld name={this.state.name} />;
  }
}

export default App;
