import * as React from "react";
const SvgLockKeyhole = (props) => (
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
      d="M7 10V7a5 5 0 1 1 10 0v3m-4 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0m-8-6h14a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-8a2 2 0 0 1 2-2"
    />
  </svg>
);
export default SvgLockKeyhole;
