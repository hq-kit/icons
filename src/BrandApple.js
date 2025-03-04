import * as React from "react";
const SvgBrandApple = (props) => (
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
      d="M18.523 9.135a4.1 4.1 0 0 0-1.45 1.464 4 4 0 0 0-.545 1.967c.003.776.238 1.535.677 2.182A4.04 4.04 0 0 0 19 16.205a9.3 9.3 0 0 1-1.265 2.554c-.79 1.11-1.613 2.218-2.867 2.218s-1.576-.712-3.021-.712c-1.41 0-1.912.735-3.058.735-1.147 0-1.947-1.027-2.866-2.287A10.9 10.9 0 0 1 4 12.752c0-3.5 2.329-5.355 4.622-5.355 1.218 0 2.233.782 2.997.782.729 0 1.863-.828 3.249-.828a4.4 4.4 0 0 1 2.056.446c.637.311 1.186.771 1.599 1.338M14.21 5.87c.611-.703.957-1.588.98-2.51a1.7 1.7 0 0 0-.036-.36c-1.05.1-2.02.588-2.712 1.365a3.86 3.86 0 0 0-1.015 2.438q0 .166.036.327.125.023.251.023c.483-.038.954-.171 1.383-.392.43-.22.808-.524 1.113-.892"
    />
  </svg>
);
export default SvgBrandApple;
