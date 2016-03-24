import {Duration} from "./duration";

interface CacheEntry {
  expires: Date | string;
  data: any;
}

interface CacheConfiguration {
  maxAge: Duration;
}

export class Cache {
  constructor(private config: CacheConfiguration) {}

  public has(key: string) {
    const cacheEntry: CacheEntry = JSON.parse(localStorage.getItem(key));

    if (cacheEntry === null)
      return false;

    const hasExpired = new Date() > new Date(<string>cacheEntry.expires);

    if (hasExpired)
      console.log('cache expired', key);

    return !hasExpired;
  }

  public get(key: string): any {
    const cacheEntry = JSON.parse(localStorage.getItem(key));
    return cacheEntry.data;
  }

  public set(key: string, value: any) {
    const cacheEntry: CacheEntry = {
      expires: new Date(new Date().getTime() + this.config.maxAge.toMilliSeconds()),
      data: value
    };

    localStorage.setItem(key, JSON.stringify(cacheEntry));
  }
}
