import * as React from "react";
const SvgAudioLines = (props) => (
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
      d="M2 10v3m4-7v11m4-14v18m4-13v7m4-10v13m4-8v3"
    />
  </svg>
);
export default SvgAudioLines;
