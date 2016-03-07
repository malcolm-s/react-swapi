import * as React from "react";

interface UrlPagerProps {
  onPreviousClick: () => void;
  onNextClick: () => void;
  canGoNext: () => boolean;
  canGoPrevious: () => boolean;
}

export function UrlPager(props: UrlPagerProps) {
  return (
    <div>
      <button onClick={props.onPreviousClick} disabled={!props.canGoPrevious()}>previous</button>
      <button onClick={props.onNextClick} disabled={!props.canGoNext()}>next</button>
    </div>
  );
}
