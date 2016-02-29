/// <reference path="../typings/tsd.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import {People} from "./starwars/people";
import {Planets} from "./starwars/planets";

function renderRoutes() {
  if (window.location.hash.indexOf("people") > -1) {
    return <People />
  }
  if (window.location.hash.indexOf("planets") > -1) {
      return <Planets />
  }
}

function App() {
  return (
    <div>
      <h1>Star Wars</h1>
      <div>
        <a href="#people">People</a>
        <a href="#planets">Planets</a>
      </div>
      {renderRoutes()}
    </div>
  );
}

const container = document.getElementById("app");

function renderApp() {
  ReactDOM.render(<App />, container);
}

window.addEventListener("load", renderApp);
window.addEventListener("popstate", renderApp);
