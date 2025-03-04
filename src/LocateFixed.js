import * as React from "react";
const SvgLocateFixed = (props) => (
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
      d="M2 12h3m0 0a7 7 0 0 0 7 7m-7-7a7 7 0 0 1 7-7m7 7h3m-3 0a7 7 0 0 1-7 7m7-7a7 7 0 0 0-7-7m0-3v3m0 14v3m3-10a3 3 0 1 1-6 0 3 3 0 0 1 6 0"
    />
  </svg>
);
export default SvgLocateFixed;
