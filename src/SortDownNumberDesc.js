import * as React from "react";
const SvgSortDownNumberDesc = (props) => (
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
      d="m3 16 4 4m0 0 4-4m-4 4V4m10 6V4h-2m0 6h4m-2 4a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0v-2a2 2 0 0 1 2-2"
    />
  </svg>
);
export default SvgSortDownNumberDesc;
