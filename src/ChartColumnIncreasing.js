import * as React from "react";
const SvgChartColumnIncreasing = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M13 17V9m5 8V5M3 3v16a2 2 0 0 0 2 2h16M8 17v-3"
    />
  </svg>
);
export default SvgChartColumnIncreasing;
