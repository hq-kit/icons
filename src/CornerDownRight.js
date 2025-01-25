import * as React from "react";
const SvgCornerDownRight = (props) => (
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
      d="m15 10 5 5m0 0-5 5m5-5H8a4 4 0 0 1-4-4V4"
    />
  </svg>
);
export default SvgCornerDownRight;
