import * as React from "react";
import {Vehicle} from "./vehicle";
import {UrlPager} from "../url-pager";
import {LoadingHeader} from "../loading-header";
import {fetchVehicles} from "../swapi/swapi-service";
import {PropertyViewer} from "../property-viewer";

interface VehiclesState {
  loading: boolean;
  vehicles?: Vehicle[];
  previousUrl?: string;
  nextUrl?: string;
}

export class Vehicles extends React.Component<{}, VehiclesState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.fetchVehicles();
  }

  fetchVehicles(url?: string) {
    if (url === null) return;

    this.setState({ loading: true });
    return fetchVehicles(url).then(res => {
      console.log(res)
      this.setState({
        loading: false,
        vehicles: res.results,
        previousUrl: res.previous,
        nextUrl: res.next
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <LoadingHeader name="Vehicles" />;
    } else {
      return (
        <div>
          <h2>Vehicles</h2>
          <UrlPager
            onPreviousClick={() => this.fetchVehicles(this.state.previousUrl)}
            onNextClick={() => this.fetchVehicles(this.state.nextUrl)}
            canGoPrevious={() => !!this.state.previousUrl}
            canGoNext={() => !!this.state.nextUrl} />
            <div>
              {this.state.vehicles.map((starship, i) => <PropertyViewer key={i} {...starship} />)}
            </div>
        </div>
      );
    }
  }
}
