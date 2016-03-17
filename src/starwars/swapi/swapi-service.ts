import {SwapiListResponse} from "./swapi-list-response";
import {Planet} from "../planets/planet";
import {Person} from "../people/person";
import {Starship} from "../starships/starship";
import {Species} from "../species/species";
import {Vehicle} from "../vehicles/vehicle";
import {Film} from "../films/film";

declare function fetch(url: string): any;

function fetchJson<T>(url: string): PromiseLike<T> {
  return fetch(url).then(res => res.json());
}

export function fetchResource<T>(url: string): PromiseLike<SwapiListResponse<T>> {
  return fetch(url).then(res => res.json());
}

interface SwapiResourceDefinitions {
  [name: string]: string;
}

export interface SwapiResource {
  name: string;
  url: string;
  schema?: Schema;
}

export interface Schema {
  description?: string;
  properties?: {};
}

interface SchemaPropertyDefinition {
  [property: string]: string;
}

export function fetchResources(): PromiseLike<SwapiResource[]> {
  return fetchJson<SwapiResourceDefinitions>('http://swapi.co/api/')
    .then(resources =>
      Object.keys(resources).map(prop => {
        return { name: prop, url: resources[prop] }
      }));
}

export function fetchSchema(url: string): PromiseLike<Schema> {
  return  fetchJson<Schema>(`${url}schema`);
}
