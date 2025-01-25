import * as React from "react";
const SvgMoon = (props) => (
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
      d="M12 3a6.364 6.364 0 1 0 9 9 9 9 0 1 1-9-9"
    />
  </svg>
);
export default SvgMoon;
