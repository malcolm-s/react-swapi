import * as React from "react";

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
    return <ArrayPropertyViewer name={props.name} value={props.value} />;
  } else {
    return <LiteralPropertyViewer name={props.name} value={props.value} />;
  }
}

function LiteralPropertyViewer(props) {
  return (
    <div>
      <div><b>{props.name}</b></div>
      <div>{props.value}</div>
    </div>
  );
}

function ArrayPropertyViewer(props) {
  return (
    <div>
      <div><b>{props.name}</b></div>
      <div>
        {props.value.map((value, i) => <div key={i}>{value}</div>)}
      </div>
    </div>
  );
}
