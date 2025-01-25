import * as React from "react";
const SvgArrowRightToLine = (props) => (
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
      d="M17 12H3m14 0-6 6m6-6-6-6m10-1v14"
    />
  </svg>
);
export default SvgArrowRightToLine;
