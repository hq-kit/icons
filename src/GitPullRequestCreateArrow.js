import * as React from "react";
const SvgGitPullRequestCreateArrow = (props) => (
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
      d="M5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0v12M15 9l-3-3m0 0 3-3m-3 3h5a2 2 0 0 1 2 2v3m0 4v6m3-3h-6"
    />
  </svg>
);
export default SvgGitPullRequestCreateArrow;
