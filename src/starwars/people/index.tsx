import * as React from "react";
import {SwapiResourcePage} from "../swapi/swapi-resource-page";
import {SwapiResource} from "../swapi/swapi-resource";

const peopleResource: SwapiResource = {
  name: "People",
  listUrl: "http://swapi.co/api/people"
};

export function PeoplePage() {
  return <SwapiResourcePage {...peopleResource} />
}
