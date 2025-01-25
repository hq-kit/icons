import * as React from "react";
const SvgTrendingDown = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="m22 17-8.5-8.5-5 5L2 7m20 10h-6m6 0v-6"
    />
  </svg>
);
export default SvgTrendingDown;
