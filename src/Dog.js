import * as React from "react";
const SvgDog = (props) => (
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
      d="M16 14v.5M4.42 11.247a13.2 13.2 0 0 0-.42 3.31C4 18.727 7.582 21 12 21s8-2.272 8-6.444a11.7 11.7 0 0 0-.493-3.309M8 14v.5m.5-6c-.384 1.05-1.083 2.028-2.344 2.5-1.931.722-3.576-.297-3.656-1-.113-.994 1.177-6.53 4-7 1.923-.321 3.651.845 3.651 2.235A7.5 7.5 0 0 1 14 5.277c0-1.39 1.844-2.598 3.767-2.277 2.823.47 4.113 6.006 4 7-.08.703-1.725 1.722-3.656 1-1.261-.472-1.855-1.45-2.239-2.5m-4.622 7.75h1.5L12 17z"
    />
  </svg>
);
export default SvgDog;
