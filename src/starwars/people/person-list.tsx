import * as React from "react";
import {Person} from "./person";
import {PropertyViewer} from "../property-viewer";

interface PersonListProps {
  people: Person[];
}

export function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.people.map((person, i) => <PropertyViewer key={i} {...person} />)}
    </div>
  );
}
