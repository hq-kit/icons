import * as React from "react";
const SvgMessageReply = (props) => (
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
      d="m10 15-3-3m0 0 3-3m-3 3h7a2 2 0 0 1 2 2v1m-8.1 5A9 9 0 1 0 4 16.1L2 22z"
    />
  </svg>
);
export default SvgMessageReply;
