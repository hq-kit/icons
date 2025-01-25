import * as React from "react";
const SvgInfinity = (props) => (
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
      d="M12 12c-2-2.67-4-4-6-4a4 4 0 0 0 0 8c2 0 4-1.33 6-4m0 0c2 2.67 4 4 6 4a4 4 0 1 0 0-8c-2 0-4 1.33-6 4"
    />
  </svg>
);
export default SvgInfinity;
