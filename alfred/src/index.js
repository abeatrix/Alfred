import React from "react";
import ReactDOM from "react-dom";
import { RecoilRoot } from "recoil";
import { BrowserRouter as Router } from "react-router-dom";
import "./index.css";
import App from "./App";

ReactDOM.render(
  // StrictMode is a tool for highlighting potential
  // problems in an application. Like Fragment,
  // StrictMode does not render any visible UI.
  // It activates additional checks and warnings for
  // its descendants.
  <React.StrictMode>
    <RecoilRoot>
      <Router>
        <App />
      </Router>
    </RecoilRoot>
  </React.StrictMode>,
  document.getElementById("root")
);
