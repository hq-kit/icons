import * as React from "react";
const SvgBetweenHorizontalStart = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m2 9 3 3-3 3M9 3h11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1m0 11h11a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H9a1 1 0 0 1-1-1v-5a1 1 0 0 1 1-1"
    />
  </svg>
);
export default SvgBetweenHorizontalStart;
