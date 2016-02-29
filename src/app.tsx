/// <reference path="../typings/tsd.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import {SubComponent} from "./sub-component";
import {TableGenerator} from "./table-generator";
import {People} from "./starwars/people";

function App() {
  return (
    <div>
      <h1>Star Wars</h1>
      <People />
    </div>
  );
}

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
