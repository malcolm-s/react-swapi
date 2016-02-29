export interface SwapiListResponse<T> {
  count: number;
  next?: string;
  previous?: string;
  results: T[];
}
