import React from "react";
import ReactDOM from "react-dom";
import "./css/index.css";
import { BrowserRouter, Route } from "react-router-dom";
import Layout from "./js/pages/layout";
console.log("OI");
ReactDOM.render(
  <div>
    <BrowserRouter>
      <Route path="/" component={Layout} />
    </BrowserRouter>
  </div>,
  document.getElementById("root"),
);
