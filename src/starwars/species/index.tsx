import * as React from "react";
import {SwapiResourcePage} from "../swapi/swapi-resource-page";
import {SwapiResource} from "../swapi/swapi-resource";

const speciesResource: SwapiResource = {
  name: "Species",
  url: "http://swapi.co/api/species"
};

export function SpeciesPage() {
  return <SwapiResourcePage {...speciesResource} />
}
