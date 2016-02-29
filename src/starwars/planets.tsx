import * as React from "react";
import {Planet} from "./models/planet";
import {SwapiListResponse} from "./models/swapi-list-response";
import {PlanetList} from "./planet-list";
import {UrlPager} from "./url-pager";

declare function fetch(url: string): any;

interface PlanetsState {
  loading: boolean;
  Planets?: Planet[];
  previousUrl?: string;
  nextUrl?: string;
}

export class Planets extends React.Component<{}, PlanetsState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.fetchPlanets("http://swapi.co/api/planets");
  }

  fetchPlanets(url) {
    this.setState({ loading: true });

    return fetch(url)
      .then(res => res.json())
      .then((res: SwapiListResponse<Planet>) => {
        console.log(res)
        this.setState({
          loading: false,
          Planets: res.results,
          previousUrl: res.previous,
          nextUrl: res.next
        });
      });
  }

  render() {
    if (this.state.loading) {
      return (
        <div>
          <h2>Planets</h2>
          <div>Loading...</div>
        </div>
      );
    } else {
      return (
        <div>
          <h2>Planets</h2>
          <UrlPager
            onPreviousClick={() => this.fetchPlanets(this.state.previousUrl)}
            onNextClick={() => this.fetchPlanets(this.state.nextUrl)} />
          <PlanetList planets={this.state.Planets} />
        </div>
      );
    }
  }
}
