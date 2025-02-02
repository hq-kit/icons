import * as React from "react";
const SvgBrandPlaystation = (props) => (
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
      d="M9.487 4v14.927L12.749 20V7.481c0-.587.254-.98.662-.843.53.153.633.692.633 1.28v4.998c2.035 1.015 3.635-.002 3.635-2.681 0-2.754-.938-3.977-3.698-4.957-1.09-.381-3.107-1.01-4.492-1.278zm3.88 13.816 5.246-1.935c.596-.22.689-.532.206-.696-.489-.163-1.365-.118-1.965.105l-3.504 1.276v-2.03l.2-.073s1.001-.357 2.428-.523c1.413-.153 3.154.025 4.53.562 1.54.511 1.7 1.252 1.314 1.763-.388.51-1.352.88-1.352.88l-7.12 2.644v-1.953zm-9.86-.201c-1.584-.464-1.846-1.42-1.127-1.974.667-.498 1.8-.895 1.8-.895l4.679-1.712V15l-3.355 1.252c-.587.231-.687.538-.199.703.489.166 1.364.128 1.953-.102l1.615-.6v1.764c-.1.025-.214.037-.325.062-1.616.282-3.33.167-5.032-.407z"
    />
  </svg>
);
export default SvgBrandPlaystation;
