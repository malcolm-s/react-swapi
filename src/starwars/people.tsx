import * as React from "react";
import {PersonView} from "./person-view";
import {Person} from "./models/person";
import {SwapiListResponse} from "./models/swapi-list-response";
import {PersonList} from "./person-list";

interface PeopleState {
  loading: boolean;
  people?: Person[];
  previousUrl?: string;
  nextUrl?: string;
}

export class People extends React.Component<{}, PeopleState> {
  constructor(props) {
    super(props);

    this.state = {
      loading: true
    };
  }

  componentWillMount() {
    this.fetchPeople("http://swapi.co/api/people");
  }

  fetchPeople(url) {
    this.setState({ loading: true });
    
    return fetch(url)
      .then(res => res.json())
      .then((res: SwapiListResponse<Person>) => {
        console.log(res)
        this.setState({
          loading: false,
          people: res.results,
          previousUrl: res.previous,
          nextUrl: res.next
        });
      });
  }

  render() {
    if (this.state.loading) {
      return <div>Loading...</div>
    } else {
      return (
        <div>
          <div>
            {this.state.previousUrl ? <button onClick={e => this.fetchPeople(this.state.previousUrl)}>previous</button> : null}
            {this.state.nextUrl ? <button onClick={e => this.fetchPeople(this.state.nextUrl)}>next</button> : null}
          </div>
          <PersonList people={this.state.people} />
        </div>
      );
    }
  }

  renderPager() {

  }
}
