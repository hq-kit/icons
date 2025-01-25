import * as React from "react";
const SvgChevronsDownUp = (props) => (
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
      d="m7 20 5-5 5 5M7 4l5 5 5-5"
    />
  </svg>
);
export default SvgChevronsDownUp;
