import * as React from "react";
const SvgSpace = (props) => (
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
      d="M22 17v1c0 .5-.5 1-1 1H3c-.5 0-1-.5-1-1v-1"
    />
  </svg>
);
export default SvgSpace;
