import * as React from "react";
const SvgMoonStar = (props) => (
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
      d="M20 3v4m2-2h-4m-6-2a6.364 6.364 0 1 0 9 9 9 9 0 1 1-9-9"
    />
  </svg>
);
export default SvgMoonStar;
