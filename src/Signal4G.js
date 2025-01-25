import * as React from "react";
const SvgSignal4G = (props) => (
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
      d="M6 8v3a1 1 0 0 0 1 1h3m0-4v8m7-8h-2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h2v-4h-1"
    />
  </svg>
);
export default SvgSignal4G;
