import React, { Component } from "react";
import "./App.css";
import Todo from "./components/Todo.js";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: "",
      tasks: []
    };

    this.updateInput = this.updateInput.bind(this);
    this.addTask = this.addTask.bind(this);
  }
  updateInput(val) {
    this.setState({
      userInput: val
    });
  }
  addTask() {
    const updatedArr = this.state.tasks.slice();
    updatedArr.push(this.state.userInput);
    this.setState({
      tasks: updatedArr
    });
  }
  render() {
    let listTasks = this.state.tasks.map((task, key) => {
      console.log(key);
      return <Todo task={task} key={key} />;
    });
    return (
      <div className="App">
        <h1>My to-do list:</h1>
        <input
          placeholder="Enter new task"
          onChange={e => this.updateInput(e.target.value)}
          type="text"
        />
        <button onClick={this.addTask}>Add</button>
        {listTasks}
      </div>
    );
  }
}

export default App;
