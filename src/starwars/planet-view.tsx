import * as React from 'react';
import {Planet} from "./models/planet";

export function PlanetView(props: Planet) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.climate}</p>
    </div>
  );
}
