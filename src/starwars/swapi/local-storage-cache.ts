declare var Promise: any;

export function has(key: string) {
  return !!localStorage.getItem(key);
}

export function get(key: string): PromiseLike<any> {
  return Promise.resolve(JSON.parse(localStorage.getItem(key)));
}

export function set(key: string, value: any) {
  localStorage.setItem(key, JSON.stringify(value));
}
