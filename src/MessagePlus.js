import * as React from "react";
const SvgMessagePlus = (props) => (
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
      d="M8 12h8m-4-4v8m-4.1 4A9 9 0 1 0 4 16.1L2 22z"
    />
  </svg>
);
export default SvgMessagePlus;
