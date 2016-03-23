import {SwapiListResponse} from "./swapi-list-response";
import {SwapiResourceDefinitions} from "./swapi-resource-definitions";
import {SwapiResource} from "./swapi-resource";
import {SwapiResourceSchema} from "./swapi-resource-schema";
import {has as cacheHas, get as cacheGet, set as cacheSet} from "./local-storage-cache";

declare function fetch(url: string): any;

function fetchJson<T>(url: string): PromiseLike<T> {
  if (cacheHas(url)) {
    console.log('got cached data for url', url)
    return cacheGet(url);
  }

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log('fetched data for url', url)
      cacheSet(url, data);
      return data;
    });
}

export function fetchResource<T>(url: string): PromiseLike<SwapiListResponse<T>> {
  return fetchJson<SwapiListResponse<T>>(url);
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
