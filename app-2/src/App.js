import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dataArr: ["spaghetti", "ice cream", "sushi", "bologna", "cheese"]
    };
  }
  render() {
    const { dataArr } = this.state;
    return <div className="App">{dataArr.map(val => <h2>{val}</h2>)}</div>;
  }
}

export default App;
