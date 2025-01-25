import * as React from "react";
const SvgCrop = (props) => (
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
      d="M6 2v14a2 2 0 0 0 2 2h14m-4 4V8a2 2 0 0 0-2-2H2"
    />
  </svg>
);
export default SvgCrop;
