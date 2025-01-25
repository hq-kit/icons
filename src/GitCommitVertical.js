import * as React from "react";
const SvgGitCommitVertical = (props) => (
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
      d="M12 3v6m0 0a3 3 0 1 0 0 6m0-6a3 3 0 1 1 0 6m0 0v6"
    />
  </svg>
);
export default SvgGitCommitVertical;
