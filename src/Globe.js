import * as React from "react";
const SvgGlobe = (props) => (
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
      d="M22 12c0 5.523-4.477 10-10 10m10-10c0-5.523-4.477-10-10-10m10 10H2m10 10C6.477 22 2 17.523 2 12m10 10a14.5 14.5 0 0 1 0-20m0 20a14.5 14.5 0 0 0 0-20M2 12C2 6.477 6.477 2 12 2"
    />
  </svg>
);
export default SvgGlobe;
