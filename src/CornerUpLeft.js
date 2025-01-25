import * as React from "react";
const SvgCornerUpLeft = (props) => (
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
      d="M9 14 4 9m0 0 5-5M4 9h12a4 4 0 0 1 4 4v7"
    />
  </svg>
);
export default SvgCornerUpLeft;
