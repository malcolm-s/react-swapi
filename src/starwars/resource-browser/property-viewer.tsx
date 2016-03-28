import * as React from "react";
import {SwapiResourceSchema} from "../data/swapi/swapi-resource-schema";
import {fetchJson} from "../data/swapi/swapi-service";

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
  const hasName = !!props.name;
  return (
    <div>
      {hasName &&
      <div>
        <PropertyTitle name={props.name} definition={props.definition} />
      </div>}
      <div>
        <PropertyValue value={props.value} />
      </div>
    </div>
  );
}

function PropertyTitle(props) {
  const name: string = props.name;
  const prettyName = name
    .split('_')
    .map(word => `${word[0].toUpperCase()}${word.substr(1, word.length - 1)}`)
    .join(' ');

  return (
    <span>
      <b>{prettyName}</b>&nbsp;<em>{props.definition ? ` - ${props.definition.description}` : ""}</em>
    </span>
  )
}

function PropertyValue(props) {
  const isArray = props.value instanceof Array;
  const isUrl = typeof props.value === "string" && props.value.indexOf('http://') > -1;

  if (isUrl)
    return <ResourceUrlPropertyView url={props.value} />;

  return (
    <span>
      {isArray
        ? props.value.map((value, i) => <PropertyView key={i} value={value} />)
        : props.value}
    </span>
  );
}

class ResourceUrlPropertyView extends React.Component<any, any> {
  constructor(props) {
    super(props);

    this.state = {
      name: ""
    };
  }

  componentWillMount() {
    fetchJson<any>(this.props.url)
      .then(data => {
        this.setState({ name: data.name || data.title});
      });
  }

  render() {
    return <span>{this.state.name}</span>
  }
}
