import * as React from "react";
const SvgCornerRightDown = (props) => (
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
      d="m10 15 5 5m0 0 5-5m-5 5V8a4 4 0 0 0-4-4H4"
    />
  </svg>
);
export default SvgCornerRightDown;
