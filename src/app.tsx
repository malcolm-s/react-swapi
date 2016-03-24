/// <reference path="../typings/main.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import {ResourceBrowserContainer} from "./starwars/resource-browser";

function App() {
  return (
    <div>
      <h1>Star Wars</h1>
      <ResourceBrowserContainer />
    </div>
  );
}

const container = document.getElementById("app");

function renderApp() {
  ReactDOM.render(<App />, container);
}

window.addEventListener("load", () => localStorage.clear());
window.addEventListener("load", renderApp);
window.addEventListener("hashchange", renderApp);
