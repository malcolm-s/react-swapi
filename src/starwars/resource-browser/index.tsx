import * as React from 'react';
import {fetchResources, fetchSchema} from "../data/swapi/swapi-service";
import {SwapiResource} from "../data/swapi/swapi-resource";
import {SwapiResourceSchema} from "../data/swapi/swapi-resource-schema";
import {SwapiResourcePage} from "./swapi-resource-page";

interface ResourceContainer {
  resources: SwapiResource[];
}

export class ResourceBrowserContainer extends React.Component<any, ResourceContainer> {
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
    const matchingResources = this.state.resources.filter(matchesHash);

    return (
      <div>
        <ul>
        {this.state.resources.map((resource, i) =>
          <li key={i}><ResourceBrowserLink {...resource} /></li>)}
        </ul>
        <div>
        {matchingResources.map((resource, i) =>
          <ResourceList key={i} resource={resource} /> )}
        </div>
      </div>
    );
  }
}

function ResourceBrowserLink(props: SwapiResource) {
  return <a href={`#${props.name}`}>{props.name}</a>;
}

function matchesHash(resource: SwapiResource) {
  return window.location.hash.indexOf(resource.name) > -1;
}

interface SchemaLoader {
  schema: SwapiResourceSchema;
  loading: boolean;
}

class ResourceList extends React.Component<any, SchemaLoader> {
  constructor(props) {
    super(props);

    this.state = {
      schema: {},
      loading: true
    };
  }

  componentWillMount() {
    this.updateSchemaState(this.props.resource.url);
  }

  componentWillReceiveProps(props) {
    if (props.resource.url != this.props.resource.url) {
      this.updateSchemaState(props.resource.url);
    }
  }

  updateSchemaState(url: string) {
    fetchSchema(url).then(schema => {
      this.setState({ schema, loading: false });
    });
  }

  render() {
    return (
      <div>
        {this.state.loading
          ? <span>Loading...</span>
          : <SwapiResourcePage {...this.props.resource} schema={this.state.schema} />}
      </div>
    );
  }
}
