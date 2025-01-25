import * as React from "react";
const SvgArrowLeftRight = (props) => (
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
      d="M8 3 4 7m0 0 4 4M4 7h16m-4 14 4-4m0 0-4-4m4 4H4"
    />
  </svg>
);
export default SvgArrowLeftRight;
