import * as React from "react";
import {SwapiResourceSchema} from "./swapi/swapi-resource-schema";

interface SchemaPropertyViewerProps {
  schema?: SwapiResourceSchema;
}

export function SchemaPropertyViewer(props: SchemaPropertyViewerProps) {
  return (
    <div>
      <h3>{props["name"]}</h3>
      <div>
        {Object.keys(props)
          .filter(prop => prop !== "schema")
          .map((prop, i) => {
          return <PropertyValueViewer
            key={i}
            name={prop}
            value={props[prop]}
            definition={props.schema.properties[prop]} />;
        })}
      </div>
    </div>
  )
}

export function PropertyViewer(props) {
  return (
    <div>
      <h3>{props["name"]}</h3>
      <div>
        {Object.keys(props).map((prop, i) => <div key={i}><PropertyValueViewer name={prop} value={props[prop]} /></div>)}
      </div>
    </div>
  )
}

function PropertyValueViewer(props) {
  if (props.value instanceof Array) {
    return <ArrayPropertyViewer {...props} />;
  } else {
    return <LiteralPropertyViewer {...props} />;
  }
}

function LiteralPropertyViewer(props) {
  return (
    <div>
      <div>
        <b>{props.name}</b>&nbsp;<em>{props.definition ? `(${props.definition.description})` : ""}</em>
      </div>
      <div>{props.value}</div>
    </div>
  );
}

function ArrayPropertyViewer(props) {
  return (
    <div>
      <div>
        <b>{props.name}</b>
        <em>{props.description}</em>
      </div>
      <div>
        {props.value.map((value, i) => <div key={i}>{value}</div>)}
      </div>
    </div>
  );
}
