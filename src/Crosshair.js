import * as React from "react";
const SvgCrosshair = (props) => (
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
      d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10h-4m-6 10C6.477 22 2 17.523 2 12m10 10v-4M2 12C2 6.477 6.477 2 12 2M2 12h4m6-10v4"
    />
  </svg>
);
export default SvgCrosshair;
