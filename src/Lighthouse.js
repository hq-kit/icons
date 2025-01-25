import * as React from "react";
const SvgLighthouse = (props) => (
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
      d="M8 9h8M3 11l2-2-2-2m18 4-2-2 2-2m-9-4 2 3 2 15H8l2-15z"
    />
  </svg>
);
export default SvgLighthouse;
