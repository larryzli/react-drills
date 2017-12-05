import React, { Component } from "react";

class NewTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userInput: ""
    };
    this.updateInput = this.updateInput.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
  }
  updateInput(val) {
    this.setState({
      userInput: val
    });
  }
  handleAdd() {
    this.props.add(this.state.userInput);
    this.setState({
      userInput: ""
    });
  }
  render() {
    return (
      <div>
        <input
          value={this.state.userInput}
          placeholder="Add new task"
          onChange={e => this.updateInput(e.target.value)}
          type="text"
        />
        <button onClick={this.handleAdd}>Add</button>
      </div>
    );
  }
}

export default NewTask;
