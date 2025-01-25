import * as React from "react";
const SvgListEnd = (props) => (
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
      d="M16 12H3m13-6H3m7 12H3M21 6v10a2 2 0 0 1-2 2h-5m0 0 2-2m-2 2 2 2"
    />
  </svg>
);
export default SvgListEnd;
