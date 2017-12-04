import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      dataArr: ["spaghetti", "ice cream", "sushi", "bolgna", "cheese"]
    };
  }
  updateInput(val) {
    this.setState({
      userInput: val
    });
  }
  render() {
    let filteredFoods = this.state.dataArr.map((val, i) => {
      if (val.includes(this.state.userInput)) {
        return <h2 key={i}>{val}</h2>;
      }
    });
    return (
      <div className="App">
        <input onChange={e => this.updateInput(e.target.value)} type="text" />
        {filteredFoods}
      </div>
    );
  }
}

export default App;
