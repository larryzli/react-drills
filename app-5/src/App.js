import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import Image from "./components/Image.js";

class App extends Component {
  render() {
    return (
      <div>
        <Image
          imageSrc={
            "https://images.pexels.com/photos/8158/night-television-tv-theme-machines.jpg?w=940&h=650&auto=compress&cs=tinysrgb"
          }
        />
      </div>
    );
  }
}

export default App;
