import * as React from "react";
import {PersonView} from "./person-view";
import {Person} from "./models/person";

interface PersonContainerState {
  loading: boolean;
  people?: Person[];
}

interface SwapiListResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}

export class PersonContainer extends React.Component<{}, PersonContainerState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    fetch("http://swapi.co/api/people")
      .then(res => res.json())
      .then((res: SwapiListResponse<Person>) => {
        console.log(res)
        this.setState({
          loading: false,
          people: res.results
        })
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          {this.state.people.map((person, i) => <PersonView key={i} {...person} />)}
        </div>
      );
    }
  }
}
