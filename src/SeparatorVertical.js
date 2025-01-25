import * as React from "react";
const SvgSeparatorVertical = (props) => (
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
      d="M12 3v18M8 8l-4 4 4 4m8 0 4-4-4-4"
    />
  </svg>
);
export default SvgSeparatorVertical;
