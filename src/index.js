import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import * as serviceWorker from "./serviceWorker";
import helloWorld from "./hello_world.jpg";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <header className="App-header">
        <img src={helloWorld} alt="Hello World" className="fade-in" />
        <p>This is a test server: {process.env.REACT_APP_MESSAGE}</p>
      </header>
    </div>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
