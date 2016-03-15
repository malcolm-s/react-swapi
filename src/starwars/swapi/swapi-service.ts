import {SwapiListResponse} from "./swapi-list-response";
import {Planet} from "../planets/planet";
import {Person} from "../people/person";
import {Starship} from "../starships/starship";
import {Species} from "../species/species";
import {Vehicle} from "../vehicles/vehicle";
import {Film} from "../films/film";

declare function fetch(url: string): any;

export function fetchResource<T>(url: string): PromiseLike<SwapiListResponse<T>> {
  return fetch(url).then(res => res.json());
}
