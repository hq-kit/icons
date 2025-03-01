import * as React from "react";
const SvgSpline = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`hq-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M17 5a2 2 0 1 0 4 0 2 2 0 0 0-4 0m0 0A12 12 0 0 0 5 17m0 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4"
    />
  </svg>
);
export default SvgSpline;
