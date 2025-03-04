import * as React from "react";
const SvgBrandSteam = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`hq-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M11.984 3C7.25 3 3.367 6.645 3 11.278l4.833 1.993a2.56 2.56 0 0 1 1.578-.438l2.15-3.106v-.045c0-.899.36-1.761.996-2.397a3.4 3.4 0 0 1 2.403-.995c1.874 0 3.399 1.523 3.399 3.395a3.4 3.4 0 0 1-3.4 3.393h-.078l-3.063 2.184.003.119a2.54 2.54 0 0 1-1.571 2.353 2.55 2.55 0 0 1-2.592-.385 2.56 2.56 0 0 1-.887-1.466l-3.46-1.43A9.016 9.016 0 0 0 11.984 21C16.964 21 21 16.97 21 12s-4.037-9-9.016-9M8.65 16.657 7.542 16.2c.197.407.537.75.987.938a1.92 1.92 0 0 0 2.613-1.39 1.91 1.91 0 0 0-2.551-2.163l1.144.472a1.41 1.41 0 0 1 .76 1.842 1.41 1.41 0 0 1-1.846.758m8.577-6.977A2.263 2.263 0 0 0 14.96 7.42a2.27 2.27 0 0 0-2.093 1.396 2.26 2.26 0 0 0 .491 2.464 2.268 2.268 0 0 0 3.868-1.599m-3.962-.003a1.7 1.7 0 0 1 1.702-1.7 1.704 1.704 0 0 1 1.702 1.7 1.7 1.7 0 0 1-1.702 1.698 1.703 1.703 0 0 1-1.702-1.698"
    />
  </svg>
);
export default SvgBrandSteam;
