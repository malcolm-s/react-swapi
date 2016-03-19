import * as React from "react";
import {SwapiResourcePage} from "../swapi/swapi-resource-page";
import {SwapiResource} from "../swapi/swapi-resource";

const vehiclesResource: SwapiResource = {
  name: "Vehicles",
  url: "http://swapi.co/api/vehicles"
};

export function VehiclesPage() {
  return <SwapiResourcePage {...vehiclesResource} />
}
