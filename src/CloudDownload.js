import * as React from "react";
const SvgCloudDownload = (props) => (
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
      d="M12 13v8m0 0-4-4m4 4 4-4M4.393 15.27A7 7 0 1 1 15.71 8h1.79a4.5 4.5 0 0 1 2.436 8.284"
    />
  </svg>
);
export default SvgCloudDownload;
