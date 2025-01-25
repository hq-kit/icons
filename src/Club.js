import * as React from "react";
const SvgClub = (props) => (
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
      d="M12 17.66a5.501 5.501 0 1 1-5.28-8.61 5.5 5.5 0 1 1 10.56 0v.01a5.5 5.5 0 1 1-5.28 8.6m0 0V22"
    />
  </svg>
);
export default SvgClub;
