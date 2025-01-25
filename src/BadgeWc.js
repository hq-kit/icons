import * as React from "react";
const SvgBadgeWc = (props) => (
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
      d="m6.5 9 .5 6 2-4 2 4 .5-6m5.5 1.5a1.5 1.5 0 1 0-3 0v3a1.5 1.5 0 1 0 3 0M3 7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"
    />
  </svg>
);
export default SvgBadgeWc;
