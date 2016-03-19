import * as React from 'react';
import {fetchResources, fetchSchema} from "../swapi/swapi-service";
import {SwapiResource} from "../swapi/swapi-resource";
import {SwapiResourceSchema} from "../swapi/swapi-resource-schema";
import {SwapiResourcePage} from "../swapi/swapi-resource-page";

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
    return <ResourceBrowser {...this.state} />;
  }
}

function ResourceBrowser(props: ResourceContainer) {
  return (
    <div>
      <ul>
        {props.resources.map((resource, i) => <li key={i}><ResourceBrowserLink {...resource} /></li>)}
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
      {props.resources.filter(matchesHash).map((resource, i) => <ResourceBrowserListContainer key={i} resource={resource} /> )}
    </div>
  );
}

interface ResourceBrowserListContainerState {
  schema: SwapiResourceSchema;
  loading: boolean;
}

class ResourceBrowserListContainer extends React.Component<any, ResourceBrowserListContainerState> {
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
      console.log(schema);
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
