import * as React from "react";
const SvgFlipHorizontal2 = (props) => (
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
      d="M12 20v2m0-8v2m0-8v2m0-8v2M3 7l5 5-5 5zm18 0-5 5 5 5z"
    />
  </svg>
);
export default SvgFlipHorizontal2;
