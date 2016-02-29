/// <reference path="../typings/tsd.d.ts"/>

import * as React from "react";
import * as ReactDOM from "react-dom";
import {People} from "./starwars/people";
import {Planets} from "./starwars/planets";

export function renderRoutes() {
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
  { url: "people", component: <People /> },
  { url: "planets", component: <Planets /> }
];
