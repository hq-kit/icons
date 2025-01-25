import * as React from "react";
const SvgParentheses = (props) => (
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
      d="M8 21s-4-3-4-9 4-9 4-9m8 0s4 3 4 9-4 9-4 9"
    />
  </svg>
);
export default SvgParentheses;
