import * as React from "react";
const SvgUndo = (props) => (
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
      d="M3 7v6m0 0h6m-6 0 3-2.7A9 9 0 0 1 12 8a9 9 0 0 1 9 9"
    />
  </svg>
);
export default SvgUndo;
