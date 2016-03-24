import {SwapiListResponse} from "./swapi-list-response";
import {SwapiResourceDefinitions} from "./swapi-resource-definitions";
import {SwapiResource} from "./swapi-resource";
import {SwapiResourceSchema} from "./swapi-resource-schema";
import {Cache, Duration} from "./local-storage-cache";

declare function fetch(url: string): any;
declare var Promise: any;

const cache = new Cache({
  maxAge: new Duration({ minutes: 1 })
});

function fetchJson<T>(url: string): PromiseLike<T> {
  if (cache.has(url)) {
    console.log('got cached data for url', url)
    return Promise.resolve(cache.get(url));
  }

  return fetch(url)
    .then(res => res.json())
    .then(data => {
      console.log('fetched data for url', url)
      cache.set(url, data);
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
