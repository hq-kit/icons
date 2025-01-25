import * as React from "react";
const SvgArrowDownToLine = (props) => (
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
      d="M12 17V3m0 14-6-6m6 6 6-6m1 10H5"
    />
  </svg>
);
export default SvgArrowDownToLine;
