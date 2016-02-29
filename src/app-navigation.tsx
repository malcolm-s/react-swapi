import * as React from "react";
import {routes} from "./routes";

export function AppNavigation() {
  return (
    <div>
      <ul>
        {routes.map(route =>
          <li key={route.url}>
            <a href={`#${route.url}`}>{route.url}</a>
          </li>)}
      </ul>
    </div>
  );
}
