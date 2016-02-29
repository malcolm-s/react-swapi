import * as React from "react";
import {Person} from "./models/person";

export function PersonView(props: Person) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.height}</p>
      <ul>
        {props.films.map((film, i) => <li key={i}>{film}</li>)}
      </ul>
    </div>
  )
}
