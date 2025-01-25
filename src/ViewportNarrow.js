import * as React from "react";
const SvgViewportNarrow = (props) => (
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
      d="M3 12h7m0 0L7 9m3 3-3 3m14-3h-7m0 0 3-3m-3 3 3 3M9 6V3h6v3M9 18v3h6v-3"
    />
  </svg>
);
export default SvgViewportNarrow;
