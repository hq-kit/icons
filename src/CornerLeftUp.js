import * as React from "react";
const SvgCornerLeftUp = (props) => (
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
      d="M14 9 9 4m0 0L4 9m5-5v12a4 4 0 0 0 4 4h7"
    />
  </svg>
);
export default SvgCornerLeftUp;
