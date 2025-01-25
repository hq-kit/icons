import * as React from "react";
const SvgGitPullRequestClosed = (props) => (
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
      d="M6 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v12M21 3l-6 6m6 0-6-6m3 8.5V15m0 0a3 3 0 1 0 0 6 3 3 0 0 0 0-6"
    />
  </svg>
);
export default SvgGitPullRequestClosed;
