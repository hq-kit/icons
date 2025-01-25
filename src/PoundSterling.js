import * as React from "react";
const SvgPoundSterling = (props) => (
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
      d="M18 7c0-5.333-8-5.333-8 0v14m-4 0h12M6 13h10"
    />
  </svg>
);
export default SvgPoundSterling;
