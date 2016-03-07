import {SwapiListResponse} from "./models/swapi-list-response";
import {Planet} from "./planets/planet";
import {Person} from "./people/person";

declare function fetch(url: string): any;

function fetchResource<T>(resource): PromiseLike<SwapiListResponse<T>> {
  return fetch(`http://swapi.co/api/${resource}`).then(res => res.json());
}

export function fetchPlanets() {
  return fetchResource<Planet>("planets");
}

export function fetchPeople() {
  return fetchResource<Person>("people");
}
