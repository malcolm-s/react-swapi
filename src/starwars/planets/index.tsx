import * as React from "react";
import {Planet} from "./planet";
import {PlanetList} from "./planet-list";
import {UrlPager} from "../url-pager";
import {LoadingHeader} from "../loading-header";
import {fetchPlanets} from "../swapi/swapi-service";

interface PlanetsState {
  loading: boolean;
  planets?: Planet[];
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
    this.fetchPlanets();
  }

  fetchPlanets(url?: string) {
    this.setState({ loading: true });

    return fetchPlanets(url).then(res => {
      console.log(res)
      this.setState({
        loading: false,
        planets: res.results,
        previousUrl: res.previous,
        nextUrl: res.next
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <LoadingHeader name="Planets" />;
    } else {
      return (
        <div>
          <h2>Planets</h2>
          <UrlPager
            onPreviousClick={() => this.fetchPlanets(this.state.previousUrl)}
            onNextClick={() => this.fetchPlanets(this.state.nextUrl)}
            canGoPrevious={() => !!this.state.previousUrl}
            canGoNext={() => !!this.state.nextUrl} />
          <PlanetList planets={this.state.planets} />
        </div>
      );
    }
  }
}
