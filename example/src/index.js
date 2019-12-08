import React from "react";
import ReactDOM from "react-dom";
import { createExampleComponent } from "kg-testing-react-library";
import "./index.css";
import App from "./App";

ReactDOM.render(<App />, document.getElementById("root"));

createExampleComponent("Gadhave", document.getElementById("root2"));
