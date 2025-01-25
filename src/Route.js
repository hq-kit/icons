import * as React from "react";
const SvgRoute = (props) => (
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
      d="M9 19a3 3 0 1 1-6 0 3 3 0 0 1 6 0m0 0h8.5a3.5 3.5 0 1 0 0-7h-11a3.5 3.5 0 1 1 0-7H15m0 0a3 3 0 1 0 6 0 3 3 0 0 0-6 0"
    />
  </svg>
);
export default SvgRoute;
