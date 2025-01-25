import * as React from "react";
const SvgListPlus = (props) => (
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
      d="M11 12H3m13-6H3m13 12H3m15-9v6m3-3h-6"
    />
  </svg>
);
export default SvgListPlus;
