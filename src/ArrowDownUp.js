import * as React from "react";
const SvgArrowDownUp = (props) => (
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
      d="m3 16 4 4m0 0 4-4m-4 4V4m14 4-4-4m0 0-4 4m4-4v16"
    />
  </svg>
);
export default SvgArrowDownUp;
