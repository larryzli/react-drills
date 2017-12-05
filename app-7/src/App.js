import React, { Component } from "react";
import "./App.css";
import NewTask from "./components/NewTask.js";
import List from "./components/List.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      itemArr: []
    };

    this.addItem = this.addItem.bind(this);
  }
  addItem(item) {
    const newItemArr = this.state.itemArr.slice();
    newItemArr.push(item);
    this.setState({
      itemArr: newItemArr
    });
  }
  render() {
    return (
      <div className="App">
        <h1>My To-do List:</h1>
        <NewTask add={this.addItem} />
        <List itemArr={this.state.itemArr} />
      </div>
    );
  }
}

export default App;
