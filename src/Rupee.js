import * as React from "react";
const SvgRupee = (props) => (
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
      d="M6 3h12M6 8h12m-3.5 13L6 13h3c6.667 0 6.667-10 0-10"
    />
  </svg>
);
export default SvgRupee;
