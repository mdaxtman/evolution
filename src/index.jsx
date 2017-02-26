import ReactDOM from "react-dom";
import React from "react";
import Main from "./views/main";
import "./global.css";

ReactDOM.render(<Main/>, document.getElementById("root"));

if (module.hot) {
  module.hot.accept();
}
