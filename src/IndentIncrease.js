import * as React from "react";
const SvgIndentIncrease = (props) => (
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
      d="m3 8 4 4-4 4m18-4H11m10-6H11m10 12H11"
    />
  </svg>
);
export default SvgIndentIncrease;
