import * as React from "react";
const SvgUmbrellaOff = (props) => (
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
      d="M12 2v1m3.5 18a1.85 1.85 0 0 1-3.5-1v-8H2a10 10 0 0 1 3.428-6.575M17.5 12H22A10 10 0 0 0 9.004 3.455M2 2l20 20"
    />
  </svg>
);
export default SvgUmbrellaOff;
