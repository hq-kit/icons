import * as React from "react";
const SvgSignalLte = (props) => (
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
      d="M21 8h-4v8h4m-4-4h2.5M4 8v8h4m2-8h4m-2 0v8"
    />
  </svg>
);
export default SvgSignalLte;
