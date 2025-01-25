import * as React from "react";
const SvgSignalHigh = (props) => (
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
      d="M2 20h.01M7 20v-4m5 4v-8m5 8V8"
    />
  </svg>
);
export default SvgSignalHigh;
