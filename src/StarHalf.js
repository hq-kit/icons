import * as React from "react";
const SvgStarHalf = (props) => (
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
      d="M12 17.8 5.8 21 7 14.1 2 9.3l7-1L12 2"
    />
  </svg>
);
export default SvgStarHalf;
