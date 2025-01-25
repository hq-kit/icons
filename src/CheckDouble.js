import * as React from "react";
const SvgCheckDouble = (props) => (
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
      d="M18 6 7 17l-5-5m20-2-7.5 7.5L13 16"
    />
  </svg>
);
export default SvgCheckDouble;
