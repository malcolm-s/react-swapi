import * as React from "react";
import {SwapiResourcePage} from "../swapi/swapi-resource-page";
import {SwapiResource} from "../swapi/swapi-resource";

const planetsResource: SwapiResource = {
  name: "Planets",
  listUrl: "http://swapi.co/api/planets"
};

export function PlanetsPage() {
  return <SwapiResourcePage {...planetsResource} />
}
