import * as React from "react";
const SvgBookmarkMinus = (props) => (
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
      d="M15 10H9m10 11-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"
    />
  </svg>
);
export default SvgBookmarkMinus;
