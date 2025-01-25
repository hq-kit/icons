import * as React from "react";
const SvgArrowUpFromLine = (props) => (
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
      d="m18 9-6-6m0 0L6 9m6-6v14m-7 4h14"
    />
  </svg>
);
export default SvgArrowUpFromLine;
