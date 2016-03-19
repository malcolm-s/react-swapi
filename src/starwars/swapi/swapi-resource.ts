import {SwapiResourceSchema} from "./swapi-resource-schema";

export interface SwapiResource {
  name: string;
  url: string;
  schema?: SwapiResourceSchema;
}
