import * as React from "react";
import {SwapiResourcePage} from "../swapi/swapi-resource-page";
import {SwapiResource} from "../swapi/swapi-resource";

const starshipsResource: SwapiResource = {
  name: "Starships",
  listUrl: "http://swapi.co/api/starships"
};

export function StarshipsPage() {
  return <SwapiResourcePage {...starshipsResource} />
}
