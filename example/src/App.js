import React, { Component } from "react";

import ExampleComponent from "kg-testing-react-library";

export default class App extends Component {
  render() {
    return (
      <div>
        <ExampleComponent text="Modern React component module" />
        <div id="root2"></div>
      </div>
    );
  }
}
