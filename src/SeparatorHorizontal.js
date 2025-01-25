import * as React from "react";
const SvgSeparatorHorizontal = (props) => (
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
      d="M3 12h18M8 8l4-4 4 4m0 8-4 4-4-4"
    />
  </svg>
);
export default SvgSeparatorHorizontal;
