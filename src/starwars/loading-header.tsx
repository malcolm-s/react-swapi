import * as React from "react";

interface LoadingHeaderProps {
  name: string;
}

export function LoadingHeader(props: LoadingHeaderProps) {
  return (
    <div>
      <h2>{props.name}</h2>
      <div>Loading...</div>
    </div>
  );
}
