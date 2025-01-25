import * as React from "react";
const SvgArrowLeftToLine = (props) => (
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
      d="M3 19V5m10 1-6 6m0 0 6 6m-6-6h14"
    />
  </svg>
);
export default SvgArrowLeftToLine;
