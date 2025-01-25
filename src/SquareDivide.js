import * as React from "react";
const SvgSquareDivide = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M13 16a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
    <path fill="currentColor" d="M13 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
  </svg>
);
export default SvgSquareDivide;
