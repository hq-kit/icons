import * as React from "react";
const SvgMoveDiagonal = (props) => (
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
      d="M11 19H5m0 0v-6m0 6L19 5m-6 0h6m0 0v6"
    />
  </svg>
);
export default SvgMoveDiagonal;
