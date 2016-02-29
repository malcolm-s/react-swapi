import * as React from "react";

export function PropertyViewer(props) {
  return (
    <div>
      <h3>{props["name"]}</h3>
      <ul>
        {Object.keys(props).map(prop => <li><PropertyValueViewer name={prop} value={props[prop]} /></li>)}
      </ul>
    </div>
  )
}

function PropertyValueViewer(props) {
  if (props.value instanceof Array) {
    return <ArrayPropertyViewer name={props.name} value={props.value} />;
  } else {
    return <LiteralPropertyViewer name={props.name} value={props.value} />;
  }
}

function LiteralPropertyViewer(props) {
  return <span>{props.name}: {props.value}</span>
}

function ArrayPropertyViewer(props) {
  return (
    <div>
      <div>{props.name}</div>
      <ul>
        {props.value.map(value => <li>{value}</li>)}
      </ul>
    </div>
  );
}
