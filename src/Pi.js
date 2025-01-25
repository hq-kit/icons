import * as React from "react";
const SvgPi = (props) => (
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
      d="M9 4v16M4 7c0-1.7 1.3-3 3-3h13m-2 16c-1.7 0-3-1.3-3-3V4"
    />
  </svg>
);
export default SvgPi;
