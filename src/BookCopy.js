import * as React from "react";
const SvgBookCopy = (props) => (
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
      d="M2 16V4a2 2 0 0 1 2-2h11M2 16a2 2 0 0 1 2-2h1m-3 2a2 2 0 0 0 2 2h1m17 0H11a2 2 0 0 0-2 2m0 0a2 2 0 0 0 2 2h10.5a.5.5 0 0 0 .5-.5v-15a.5.5 0 0 0-.5-.5H11a2 2 0 0 0-2 2z"
    />
  </svg>
);
export default SvgBookCopy;
