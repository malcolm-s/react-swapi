import * as React from "react";
import {Starship} from "./starship";
import {UrlPager} from "../url-pager";
import {LoadingHeader} from "../loading-header";
import {fetchStarships} from "../swapi/swapi-service";
import {PropertyViewer} from "../property-viewer";

interface StarshipsState {
  loading: boolean;
  starships?: Starship[];
  previousUrl?: string;
  nextUrl?: string;
}

export class Starships extends React.Component<{}, StarshipsState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.fetchStarships();
  }

  fetchStarships(url?: string) {
    if (url === null) return;

    this.setState({ loading: true });
    return fetchStarships(url).then(res => {
      console.log(res)
      this.setState({
        loading: false,
        starships: res.results,
        previousUrl: res.previous,
        nextUrl: res.next
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <LoadingHeader name="Starships" />;
    } else {
      return (
        <div>
          <h2>Starships</h2>
          <UrlPager
            onPreviousClick={() => this.fetchStarships(this.state.previousUrl)}
            onNextClick={() => this.fetchStarships(this.state.nextUrl)}
            canGoPrevious={() => !!this.state.previousUrl}
            canGoNext={() => !!this.state.nextUrl} />
            <div>
              {this.state.starships.map((starship, i) => <PropertyViewer key={i} {...starship} />)}
            </div>
        </div>
      );
    }
  }
}
