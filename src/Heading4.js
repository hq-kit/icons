import * as React from "react";
const SvgHeading4 = (props) => (
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
      d="M4 12h8m-8 6V6m8 12V6m5 4v4h4m0-4v8"
    />
  </svg>
);
export default SvgHeading4;
