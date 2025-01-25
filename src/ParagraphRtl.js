import * as React from "react";
const SvgParagraphRtl = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14 3v11m0-5h-3a3 3 0 0 1 0-6h9m-2 0v11m4 4H2m0 0 4-4m-4 4 4 4"
    />
  </svg>
);
export default SvgParagraphRtl;
