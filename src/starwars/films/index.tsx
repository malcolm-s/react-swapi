import * as React from "react";
import {Film} from "./film";
import {UrlPager} from "../url-pager";
import {LoadingHeader} from "../loading-header";
import {fetchFilms} from "../swapi/swapi-service";
import {PropertyViewer} from "../property-viewer";

interface FilmsState {
  loading: boolean;
  films?: Film[];
  previousUrl?: string;
  nextUrl?: string;
}

export class Films extends React.Component<{}, FilmsState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.fetchFilms();
  }

  fetchFilms(url?: string) {
    if (url === null) return;

    this.setState({ loading: true });
    return fetchFilms(url).then(res => {
      console.log(res)
      this.setState({
        loading: false,
        films: res.results,
        previousUrl: res.previous,
        nextUrl: res.next
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <LoadingHeader name="Films" />;
    } else {
      return (
        <div>
          <h2>Films</h2>
          <UrlPager
            onPreviousClick={() => this.fetchFilms(this.state.previousUrl)}
            onNextClick={() => this.fetchFilms(this.state.nextUrl)}
            canGoPrevious={() => !!this.state.previousUrl}
            canGoNext={() => !!this.state.nextUrl} />
            <div>
              {this.state.films.map((starship, i) => <PropertyViewer key={i} {...starship} />)}
            </div>
        </div>
      );
    }
  }
}
