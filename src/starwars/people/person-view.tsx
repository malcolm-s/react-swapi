import * as React from "react";
import {Person} from "./person";

export function PersonView(props: Person) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.height ? `${props.height}m` : ""}</p>
    </div>
  )
}
