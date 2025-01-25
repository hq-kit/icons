import * as React from "react";
const SvgBrandKotlin = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="M21 21H3V3h18l-9 9z" />
  </svg>
);
export default SvgBrandKotlin;
