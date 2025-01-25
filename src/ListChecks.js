import * as React from "react";
const SvgListChecks = (props) => (
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
      d="m3 17 2 2 4-4M3 7l2 2 4-4m4 1h8m-8 6h8m-8 6h8"
    />
  </svg>
);
export default SvgListChecks;
