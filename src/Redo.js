import * as React from "react";
const SvgRedo = (props) => (
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
      d="M21 7v6m0 0h-6m6 0-3-2.7A9 9 0 0 0 12 8a9 9 0 0 0-9 9"
    />
  </svg>
);
export default SvgRedo;
