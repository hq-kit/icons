import * as React from "react";
const SvgGitFork = (props) => (
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
      d="M12 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6m0 0v-3M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v2c0 .6.4 1 1 1h10c.6 0 1-.4 1-1V9m0 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6"
    />
  </svg>
);
export default SvgGitFork;
