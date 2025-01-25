import * as React from "react";
const SvgCornerRightUp = (props) => (
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
      d="m10 9 5-5m0 0 5 5m-5-5v12a4 4 0 0 1-4 4H4"
    />
  </svg>
);
export default SvgCornerRightUp;
