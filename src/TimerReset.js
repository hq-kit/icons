import * as React from "react";
const SvgTimerReset = (props) => (
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
      d="M10 2h4m-2 12v-4m-8 3a8 8 0 0 1 8-7 8 8 0 1 1-5.3 14L4 17.6m5-.6H4v5"
    />
  </svg>
);
export default SvgTimerReset;
