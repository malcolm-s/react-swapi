import {SwapiListResponse} from "./swapi-list-response";
import {SwapiResourceDefinitions} from "./swapi-resource-definitions";
import {SwapiResource} from "./swapi-resource";
import {SwapiResourceSchema} from "./swapi-resource-schema";

declare function fetch(url: string): any;

function fetchJson<T>(url: string): PromiseLike<T> {
  return fetch(url).then(res => res.json());
}

export function fetchResource<T>(url: string): PromiseLike<SwapiListResponse<T>> {
  return fetch(url).then(res => res.json());
}

export function fetchResources(): PromiseLike<SwapiResource[]> {
  return fetchJson<SwapiResourceDefinitions>('http://swapi.co/api/')
    .then(resources =>
      Object.keys(resources).map(prop => {
        return { name: prop, url: resources[prop] }
      }));
}

export function fetchSchema(url: string): PromiseLike<SwapiResourceSchema> {
  return fetchJson<SwapiResourceSchema>(`${url}schema`);
}
