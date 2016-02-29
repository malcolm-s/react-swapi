import * as React from "react";
import {PersonView} from "./person-view";
import {Person} from "./models/person";

interface PersonListProps {
  people: Person[];
  onPreviousClick?: React.EventHandler<React.MouseEvent>;
}

export function PersonList(props: PersonListProps) {
  return (
    <div>
      {props.people.map((person, i) => <PersonView key={i} {...person} />)}
    </div>
  );
}
