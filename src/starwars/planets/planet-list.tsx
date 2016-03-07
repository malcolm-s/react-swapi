import * as React from "react";
import {Planet} from "./planet";
import {PropertyViewer} from "../property-viewer";

interface PlanetListProps {
  planets: Planet[];
}

export function PlanetList(props: PlanetListProps) {
  return (
    <div>
      {props.planets.map((planet, i) => <PropertyViewer key={i} {...planet} />)}
    </div>
  );
}
