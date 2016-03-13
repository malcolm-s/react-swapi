/// <reference path="../typings/tsd.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import {PeoplePage} from "./starwars/people";
import {PlanetsPage} from "./starwars/planets";
import {StarshipsPage} from "./starwars/starships";
import {SpeciesPage} from "./starwars/species";
import {VehiclesPage} from "./starwars/vehicles";
import {FilmsPage} from "./starwars/films";

export function getRouteComponent() {
  for (let route of routes) {
      if (routeMatches(route)) {
          return route.component;
      }
  }
}

function routeMatches(route: Route) {
  return window.location.hash.indexOf(route.url) > -1;
};

export interface Route {
  url: string;
  component: JSX.Element;
}

export const routes: Route[] = [
  { url: "people", component: <PeoplePage /> },
  { url: "planets", component: <PlanetsPage /> },
  { url: "starships", component: <StarshipsPage /> },
  { url: "species", component: <SpeciesPage /> },
  { url: "vehicles", component: <VehiclesPage /> },
  { url: "films", component: <FilmsPage /> }
];
