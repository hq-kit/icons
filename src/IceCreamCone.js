import * as React from "react";
const SvgIceCreamCone = (props) => (
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
      d="m7 11 4.08 10.35a1 1 0 0 0 1.84 0L17 11M7 11h10M7 11a2 2 0 1 1 0-4 5 5 0 1 1 10 0 2 2 0 0 1 0 4"
    />
  </svg>
);
export default SvgIceCreamCone;
