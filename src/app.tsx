/// <reference path="../typings/tsd.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import {SubComponent} from "./sub-component";
import {TableGenerator} from "./table-generator";

function App() {
  return (
    <div>
      <h1>Stateless app component</h1>
      <SubComponent title="hey!" />
      <TableGenerator rows={10} columns={10} />
    </div>
  );
}

const container = document.getElementById("app");
ReactDOM.render(<App />, container);
