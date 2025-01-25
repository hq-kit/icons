import * as React from "react";
const SvgUserMinus = (props) => (
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
      d="M2 21a8 8 0 0 1 13.292-6M22 19h-6M2 21.5h13.292M15 8A5 5 0 1 1 5 8a5 5 0 0 1 10 0"
    />
  </svg>
);
export default SvgUserMinus;
