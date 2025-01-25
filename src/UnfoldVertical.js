import * as React from "react";
const SvgUnfoldVertical = (props) => (
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
      d="M12 22v-6m0 6 3-3m-3 3-3-3m3-11V2m0 0 3 3m-3-3L9 5m-5 7H2m8 0H8m8 0h-2m8 0h-2"
    />
  </svg>
);
export default SvgUnfoldVertical;
