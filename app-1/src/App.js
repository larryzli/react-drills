import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };
  }
  updateInput(val) {
    this.setState({
      userInput: val
    });
  }
  render() {
    return (
      <div className="App">
        <input onChange={e => this.updateInput(e.target.value)} type="text" />
        <p>{this.state.userInput}</p>
      </div>
    );
  }
}

export default App;
