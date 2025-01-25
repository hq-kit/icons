import * as React from "react";
const SvgMoveDiagonal2 = (props) => (
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
      d="M19 13v6m0 0h-6m6 0L5 5m0 6V5m0 0h6"
    />
  </svg>
);
export default SvgMoveDiagonal2;
