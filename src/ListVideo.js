import * as React from "react";
const SvgListVideo = (props) => (
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
      d="M12 12H3m13-6H3m9 12H3m13-6 5 3-5 3z"
    />
  </svg>
);
export default SvgListVideo;
