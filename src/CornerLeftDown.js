import * as React from "react";
const SvgCornerLeftDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m14 15-5 5m0 0-5-5m5 5V8a4 4 0 0 1 4-4h7"
    />
  </svg>
);
export default SvgCornerLeftDown;
