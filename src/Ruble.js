import * as React from "react";
const SvgRuble = (props) => (
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
      d="M6 11h8a4 4 0 1 0 0-8H9v18m-3-6h8"
    />
  </svg>
);
export default SvgRuble;
