import * as React from "react";
const SvgEllipsisVertical = (props) => (
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
      d="M12 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 6a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12 20a1 1 0 1 0 0-2 1 1 0 0 0 0 2"
    />
  </svg>
);
export default SvgEllipsisVertical;
