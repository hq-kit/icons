import * as React from "react";
const SvgArrowsUpFromLine = (props) => (
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
      d="m4 6 3-3m0 0 3 3M7 3v14m7-11 3-3m0 0 3 3m-3-3v14M4 21h16"
    />
  </svg>
);
export default SvgArrowsUpFromLine;
