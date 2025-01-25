import * as React from "react";
const SvgCircleHalf = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2m0 20C6.477 22 2 17.523 2 12S6.477 2 12 2m0 20V2m0 12 7-7m-7 12 9-9m-9-1 5-5"
    />
  </svg>
);
export default SvgCircleHalf;
