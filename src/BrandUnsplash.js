import * as React from "react";
const SvgBrandUnsplash = (props) => (
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
      d="M3 10.875h5.625v4.5h6.75v-4.5H21V21H3zM8.625 3h6.75v4.5h-6.75z"
    />
  </svg>
);
export default SvgBrandUnsplash;
