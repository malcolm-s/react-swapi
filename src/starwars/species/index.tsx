import * as React from "react";
import {UrlPager} from "../url-pager";
import {LoadingHeader} from "../loading-header";
import {fetchSpecies} from "../swapi/swapi-service";
import {PropertyViewer} from "../property-viewer";

interface SpeciesState {
  loading: boolean;
  species?: any[];
  previousUrl?: string;
  nextUrl?: string;
}

export class Species extends React.Component<{}, SpeciesState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.fetchSpecies();
  }

  fetchSpecies(url?: string) {
    this.setState({ loading: true });

    return fetchSpecies(url)
      .then(res => {
        console.log(res)
        this.setState({
          loading: false,
          species: res.results,
          previousUrl: res.previous,
          nextUrl: res.next
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <LoadingHeader name="Species" />
    } else {
      return (
        <div>
          <h2>Species</h2>
          <UrlPager
            onPreviousClick={() => this.fetchSpecies(this.state.previousUrl)}
            onNextClick={() => this.fetchSpecies(this.state.nextUrl)}
            canGoPrevious={() => !!this.state.previousUrl}
            canGoNext={() => !!this.state.nextUrl} />
          <div>
            {this.state.species.map(species => <PropertyViewer {...species} /> )}
          </div>
        </div>
      );
    }
  }
}
