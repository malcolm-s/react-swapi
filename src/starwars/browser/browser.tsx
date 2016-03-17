import * as React from 'react';
import {fetchResources, fetchSchema, SwapiResource, Schema} from "../swapi/swapi-service";

interface ResourceContainer {
  resources: SwapiResource[];
}

class ResourceBrowserContainer extends React.Component<any, ResourceContainer> {
  constructor(props) {
    super(props);

    this.state = {
      resources: []
    };
  }

  componentWillMount() {
    fetchResources().then(resources => this.setState({ resources }));
  }

  render() {
    return <ResourceBrowser {...this.state} />;
  }
}

function ResourceBrowser(props: ResourceContainer) {
  return (
    <div>
      <ul>
        {props.resources.map(resource => <li><ResourceBrowserLink {...resource} /></li>)}
      </ul>
      <ResourceBrowserRouter {...props} />
    </div>
  );
}

function ResourceBrowserLink(props: SwapiResource) {
  return <a href={`#${props.name}`}>{props.name}</a>;
}

function matchesHash(resource: SwapiResource) {
  return window.location.hash.indexOf(resource.name) > -1;
}

function ResourceBrowserRouter(props: ResourceContainer) {
  return (
    <div>
      {props.resources.filter(matchesHash).map(resource => <ResourceBrowserListContainer resource={resource} /> )}
    </div>
  );
}

interface ResourceBrowserListContainerState {
  schema: Schema
}

class ResourceBrowserListContainer extends React.Component<any, ResourceBrowserListContainerState> {
  constructor(props) {
    super(props);

    this.state = {
      schema: {}
    };
  }

  componentWillMount() {
    // get schema
    fetchSchema(this.props.url).then(console.log.bind(console));
  }

  render() {
    return (
      <div>
        {this.props.name} - {this.props.url}
        <br/>
        {JSON.stringify(this.state.schema)}
      </div>
    );
  }
}
