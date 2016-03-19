import * as React from "react";
import {SwapiListResponse} from "./swapi-list-response";
import {UrlPager} from "../url-pager";
import {PropertyViewer,SchemaPropertyViewer} from "../property-viewer";
import {fetchResource} from "./swapi-service";
import {SwapiResource} from "./swapi-resource";

interface SwapiResourcePageState {
  loading: boolean;
  lastResponse?: SwapiListResponse<{}>;
  count?: number;
}

interface SwapiResourcePageProps extends SwapiResource {}

export class SwapiResourcePage extends React.Component<SwapiResourcePageProps, SwapiResourcePageState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.fetchResults(this.props.url);
  }

  fetchResults(url: string) {
    if (!url) {
      return;
    }

    this.setState({ loading: true });

    return fetchResource(url)
      .then(res => {
        this.setState({
          loading: false,
          lastResponse: res,
          count: res.count
        });
      });
  }

  render() {
    if (this.state.loading || !this.state.lastResponse) {
      return (
        <div>
          {this.renderHeader()}
          <div>Loading...</div>
        </div>
      );
    } else {
      return (
        <div>
          {this.renderHeader()}
          <UrlPager
            onPreviousClick={() => this.fetchResults(this.state.lastResponse.previous)}
            onNextClick={() => this.fetchResults(this.state.lastResponse.next)}
            canGoPrevious={() => !!this.state.lastResponse.previous}
            canGoNext={() => !!this.state.lastResponse.next} />
          {this.renderResults()}
        </div>
      );
    }
  }

  renderResults() {
    return (
      <div>
        {this.state.lastResponse.results.map((result, i) =>
          <SchemaPropertyViewer key={i} schema={this.props.schema} {...result} />)}
      </div>
    );
  }

  renderHeader() {
    return (
      <div>
        <h2>{this.props.name} {this.state.count ? `(${this.state.count})` : ""}</h2>
        <h3>{this.props.schema.description}</h3>
      </div>
    );
  }
}
