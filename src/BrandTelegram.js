import * as React from "react";
const SvgBrandTelegram = (props) => (
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
      d="m15 10-4 4 6 6 4-16-18 7 4 2 2 6 3-4"
    />
  </svg>
);
export default SvgBrandTelegram;
