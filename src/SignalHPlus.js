import * as React from "react";
const SvgSignalHPlus = (props) => (
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
      d="M7 16V8m4 0v8m-4-4h4m3 0h4m-2-2v4"
    />
  </svg>
);
export default SvgSignalHPlus;
