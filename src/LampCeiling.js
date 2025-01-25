import * as React from "react";
const SvgLampCeiling = (props) => (
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
      d="M12 2v5m-2.83 9a3 3 0 1 0 5.66 0M6 7h12l4 9H2z"
    />
  </svg>
);
export default SvgLampCeiling;
