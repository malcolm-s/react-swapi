import * as React from "react";
import {range} from "./utils/number-utils";

interface TableGeneratorProps {
  rows: number;
  columns: number;
}

export function TableGenerator(props: TableGeneratorProps) {
  return (
    <table>
      <thead>
        <tr>
          {range(props.columns).map(i => <th>{i}</th>)}
          </tr>
      </thead>
      <tbody>
        {range(props.rows).map(i =>
          <tr>{range(props.columns).map(n => <td>{n}</td>)}</tr>)}
      </tbody>
    </table>
  );
}
