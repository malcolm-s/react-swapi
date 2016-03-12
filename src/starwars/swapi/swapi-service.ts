import {SwapiListResponse} from "./swapi-list-response";
import {Planet} from "../planets/planet";
import {Person} from "../people/person";
import {Starship} from "../starships/starship";
import {Species} from "../species/species";
import {Vehicle} from "../vehicles/vehicle";
import {Film} from "../films/film";

declare function fetch(url: string): any;

function fetchResource<T>(url: string): PromiseLike<SwapiListResponse<T>> {
  return fetch(url).then(res => res.json());
}

export function fetchPlanets(url = "http://swapi.co/api/planets") {
  return fetchResource<Planet>(url);
}

export function fetchPeople(url = "http://swapi.co/api/people") {
  return fetchResource<Person>(url);
}

export function fetchStarships(url = "http://swapi.co/api/starships") {
  return fetchResource<Starship>(url);
}

export function fetchSpecies(url = "http://swapi.co/api/species") {
  return fetchResource<Species>(url);
}

export function fetchVehicles(url = "http://swapi.co/api/vehicles") {
  return fetchResource<Vehicle>(url);
}

export function fetchFilms(url = "http://swapi.co/api/films") {
  return fetchResource<Film>(url);
}
