import * as React from "react";
import {SwapiResourcePage} from "../swapi/swapi-resource-page";
import {SwapiResource} from "../swapi/swapi-resource";

const filmsResource: SwapiResource = {
  name: "Films",
  url: "http://swapi.co/api/films"
};

export function FilmsPage() {
  return <SwapiResourcePage {...filmsResource} />
}
