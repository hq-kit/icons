import * as React from "react";
const SvgChevronsUp = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m17 11-5-5-5 5m10 7-5-5-5 5"
    />
  </svg>
);
export default SvgChevronsUp;
