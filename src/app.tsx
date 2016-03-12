/// <reference path="../typings/tsd.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import {getRouteComponent,routes} from "./routes";
import {AppNavigation} from "./app-navigation";

function App() {
  return (
    <div>
      <h1>Star Wars</h1>
      <AppNavigation routes={routes} />
      {getRouteComponent()}
    </div>
  );
}

const container = document.getElementById("app");

function renderApp() {
  ReactDOM.render(<App />, container);
}

window.addEventListener("load", renderApp);
window.addEventListener("popstate", renderApp);
