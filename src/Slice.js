import * as React from "react";
const SvgSlice = (props) => (
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
      d="m8 14-6 6h9v-3m-3-3L18.37 3.63a2.121 2.121 0 1 1 3 3L11 17m-3-3 3 3"
    />
  </svg>
);
export default SvgSlice;
