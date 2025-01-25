import * as React from "react";
const SvgTypographyX = (props) => (
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
      d="M4 7V4h16v3M5 20h6m2-16L8 20m7-5 5 5m0-5-5 5"
    />
  </svg>
);
export default SvgTypographyX;
