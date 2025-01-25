import * as React from "react";
const SvgMaximizeDiagonal = (props) => (
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
      d="M15 3h6m0 0v6m0-6-7 7M9 21H3m0 0v-6m0 6 7-7"
    />
  </svg>
);
export default SvgMaximizeDiagonal;
