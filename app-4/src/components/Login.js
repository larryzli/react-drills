import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };

    this.alertMe = this.alertMe.bind(this);
  }
  updateUsername(val) {
    this.setState({
      username: val
    });
  }
  updatePassword(val) {
    this.setState({
      password: val
    });
  }
  alertMe() {
    alert(`Username: ${this.state.username} Password: ${this.state.password}`);
  }
  render() {
    return (
      <div>
        <input
          onChange={e => this.updateUsername(e.target.value)}
          type="text"
        />
        <input
          onChange={e => this.updatePassword(e.target.value)}
          type="text"
        />
        <button onClick={this.alertMe}>Login</button>
      </div>
    );
  }
}

export default Login;
