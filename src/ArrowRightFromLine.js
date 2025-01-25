import * as React from "react";
const SvgArrowRightFromLine = (props) => (
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
      d="M3 5v14m18-7H7m14 0-6 6m6-6-6-6"
    />
  </svg>
);
export default SvgArrowRightFromLine;
