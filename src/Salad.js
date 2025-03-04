import * as React from "react";
const SvgSalad = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`hq-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M7 21h10m-5.62-9a2.4 2.4 0 0 1-.4-4.77 2.4 2.4 0 0 1 3.2-2.77 2.4 2.4 0 0 1 3.47-.63 2.4 2.4 0 0 1 3.37 3.37 2.4 2.4 0 0 1-1.1 3.7c.091.36.101.736.03 1.1M13 12l4-4m-6.1-.75A3.99 3.99 0 0 0 4 10c0 .73.2 1.41.54 2M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9"
    />
  </svg>
);
export default SvgSalad;
