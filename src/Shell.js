import * as React from "react";
const SvgShell = (props) => (
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
      d="M14 11a2 2 0 0 1-4 0 4 4 0 1 1 8 0 6 6 0 1 1-12 0 8 8 0 0 1 16 0 10 10 0 0 1-20 0 11.93 11.93 0 0 1 2.42-7.22 2 2 0 1 1 3.16 2.44"
    />
  </svg>
);
export default SvgShell;
