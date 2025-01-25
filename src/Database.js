import * as React from "react";
const SvgDatabase = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M21 5c0 1.657-4.03 3-9 3S3 6.657 3 5m18 0c0-1.657-4.03-3-9-3S3 3.343 3 5m18 0v14c0 .796-.948 1.559-2.636 2.121S14.387 22 12 22s-4.676-.316-6.364-.879S3 19.796 3 19V5m0 7c0 .796.948 1.559 2.636 2.121S9.613 15 12 15s4.676-.316 6.364-.879S21 12.796 21 12"
    />
  </svg>
);
export default SvgDatabase;
