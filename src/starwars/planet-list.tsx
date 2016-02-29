import * as React from "react";
import {PlanetView} from "./planet-view";
import {Planet} from "./models/planet";

interface PlanetListProps {
  planets: Planet[];
}

export function PlanetList(props: PlanetListProps) {
  return (
    <div>
      {props.planets.map((Planet, i) => <PlanetView key={i} {...Planet} />)}
    </div>
  );
}
