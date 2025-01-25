import * as React from "react";
const SvgUnfoldHorizontal = (props) => (
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
      d="M16 12h6m0 0-3 3m3-3-3-3M8 12H2m0 0 3-3m-3 3 3 3m7-13v2m0 4v2m0 4v2m0 4v2"
    />
  </svg>
);
export default SvgUnfoldHorizontal;
