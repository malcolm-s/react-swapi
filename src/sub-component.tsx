import * as React from "react";

interface SubComponentProps {
  title: string;
}

export class SubComponent extends React.Component<SubComponentProps, {}> {
  render() {
    return <div>Sub component - {this.props.title}</div>;
  }
}
