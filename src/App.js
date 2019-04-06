import React, { Component } from "react";
import "./App.css";
import { DISHES } from "./shared/dishes";
import Main from "./components/MainComponent";
class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return <Main />;
  }
}

export default App;
