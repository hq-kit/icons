import * as React from "react";
const SvgBrandVercel = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path fill="currentColor" d="m12 3 10 18H2z" />
  </svg>
);
export default SvgBrandVercel;
