import * as React from "react";
const SvgStore = (props) => (
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
      d="M3 21h18M3 7v1a3 3 0 1 0 6 0M3 7h18M3 7l2-4h14l2 4M9 8V7m0 1a3 3 0 1 0 6 0m0 0V7m0 1a3 3 0 0 0 6 0V7M5 21V10.85M19 21V10.85M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4"
    />
  </svg>
);
export default SvgStore;
