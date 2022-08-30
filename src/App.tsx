import React from "react";
import logo from "./logo.svg";
import "./App.less";
import { Button } from "antd";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Button type="primary">Click me</Button>
      </header>
    </div>
  );
}

export default App;
