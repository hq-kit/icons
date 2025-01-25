import * as React from "react";
const SvgMoveHorizontal = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m18 8 4 4m0 0-4 4m4-4H2m0 0 4-4m-4 4 4 4"
    />
  </svg>
);
export default SvgMoveHorizontal;
