import * as React from "react";
const SvgMegaphone = (props) => (
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
      d="M11.6 16.8a3.009 3.009 0 0 1-5.8-1.6M3 11l18-5v12L3 14z"
    />
  </svg>
);
export default SvgMegaphone;
