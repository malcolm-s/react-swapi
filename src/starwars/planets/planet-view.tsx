import * as React from 'react';
import {Planet} from "./planet";

export function PlanetView(props: Planet) {
  return (
    <div>
      <h3>{props.name}</h3>
      <p>{props.climate}</p>
    </div>
  );
}
