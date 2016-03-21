import * as React from "react";
import {SwapiResourceSchema} from "../swapi/swapi-resource-schema";

interface SchemaPropertyViewerProps {
  schema?: SwapiResourceSchema;
}

export function SwapiObjectView(props: SchemaPropertyViewerProps) {
  const displayProperties = Object.keys(props)
    .filter(prop => prop !== "schema");

  return (
    <div>
      <h3>{props["name"]}</h3>
      <div>
        {displayProperties
          .map((prop, i) => {
          return <PropertyView
            key={i}
            name={prop}
            value={props[prop]}
            definition={props.schema.properties[prop]} />;
        })}
      </div>
    </div>
  )
}

function PropertyView(props) {
  return (
    <div>
      <div>
        <PropertyTitle name={props.name} definition={props.definition} />
      </div>
      <div>
        <PropertyValue value={props.value} />
      </div>
    </div>
  );
}

function PropertyTitle(props) {
  return (
    <span>
      <b>{props.name}</b>&nbsp;<em>{props.definition ? `(${props.definition.description})` : ""}</em>
    </span>
  )
}

function PropertyValue(props) {
  const isArray = props.value instanceof Array;

  return (
    <span>
      {isArray
        ? props.value.map((value, i) => <div key={i}>{value}</div>)
        : props.value}
    </span>
  );
}
