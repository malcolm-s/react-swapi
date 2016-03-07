import * as React from "react";
import {Person} from "./person";
import {PersonList} from "./person-list";
import {UrlPager} from "../url-pager";
import {LoadingHeader} from "../loading-header";
import {fetchPeople} from "../swapi-service";

declare function fetch(url: string): any;

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

    return fetchPeople()
      .then(res => {
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
      return <LoadingHeader name="People" />
    } else {
      return (
        <div>
          <h2>People</h2>
          <UrlPager
            onPreviousClick={() => this.fetchPeople(this.state.previousUrl)}
            onNextClick={() => this.fetchPeople(this.state.nextUrl)} />
          <PersonList people={this.state.people} />
        </div>
      );
    }
  }
}