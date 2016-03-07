import * as React from "react";
import {Route} from "./routes";

interface AppNavigationProps {
  routes: Route[];
}

export function AppNavigation(props: AppNavigationProps) {
  return (
    <div>
      <ul>
        {props.routes.map(route =>
          <li key={route.url}>
            <a href={`#${route.url}`}>{route.url}</a>
          </li>)}
      </ul>
    </div>
  );
}
