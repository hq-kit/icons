import * as React from "react";
const SvgBrandAmd = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="m21 21-5.005-5.001V8h-8L3 3h18zM7.995 15.999V8.8L3 13.8V21h7.195l5-5.001z"
    />
  </svg>
);
export default SvgBrandAmd;
