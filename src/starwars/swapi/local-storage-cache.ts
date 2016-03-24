interface CacheEntry {
  expires: Date | string;
  data: any;
}

interface DurationOptions {
  days?: number;
  hours?: number;
  minutes?: number;
  seconds?: number;
}

export class Duration {
  public days: number;
  public hours: number;
  public minutes: number;
  public seconds: number;

  constructor(private options: DurationOptions) {
    this.days = options.days || 0;
    this.hours = options.hours || 0;
    this.minutes = options.minutes || 0;
    this.seconds = options.seconds || 0;
  }

  public toMilliSeconds(): number {
    if (this.days && this.days > 0) {
      return new Duration({
        hours: (this.days * 24) + this.hours,
        minutes: this.minutes,
        seconds: this.seconds
      }).toMilliSeconds();
    }
    if (this.hours && this.hours > 0) {
      return new Duration({
        minutes: (this.hours * 60) + this.minutes,
        seconds: this.seconds
      }).toMilliSeconds();
    }
    if (this.minutes && this.minutes > 0) {
      return new Duration({
        seconds: (this.minutes * 60) + this.seconds
      }).toMilliSeconds();
    }

    return this.seconds * 1000;
  }
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

export function has(key: string) {
  const cacheEntry: CacheEntry = JSON.parse(localStorage.getItem(key));

  if (cacheEntry === null) return false;
  const hasExpired = new Date() > new Date(<string>cacheEntry.expires);

  if (hasExpired)
    console.log('cache expired', key);

  return !hasExpired;
}

export function get(key: string): any {
  const cacheEntry = JSON.parse(localStorage.getItem(key));
  return cacheEntry.data;
}

export function set(key: string, value: any) {
  const cacheEntry: CacheEntry = {
    expires: new Date(new Date().getTime() + 60000),
    data: value
  };

  localStorage.setItem(key, JSON.stringify(cacheEntry));
}
