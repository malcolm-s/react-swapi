import * as React from "react";

interface UrlPagerProps {
  onPreviousClick: () => void;
  onNextClick: () => void;
}

export function UrlPager(props: UrlPagerProps) {
  return (
    <div>
      <button onClick={props.onPreviousClick}>previous</button>
      <button onClick={props.onNextClick}>next</button>
    </div>
  );
}
