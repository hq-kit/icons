import * as React from "react";
const SvgArrowDownFromLine = (props) => (
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
      d="M19 3H5m7 18V7m0 14-6-6m6 6 6-6"
    />
  </svg>
);
export default SvgArrowDownFromLine;
