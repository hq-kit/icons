import * as React from "react";
const SvgSortDownNumberAsc = (props) => (
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
      d="m3 16 4 4m0 0 4-4m-4 4V4m10 16v-6h-2m0 6h4M17 4a2 2 0 0 1 2 2v2a2 2 0 1 1-4 0V6a2 2 0 0 1 2-2"
    />
  </svg>
);
export default SvgSortDownNumberAsc;
