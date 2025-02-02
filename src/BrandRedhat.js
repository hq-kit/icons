import * as React from "react";
const SvgBrandRedhat = (props) => (
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
      d="M15.34 13.221c1.315 0 3.218-.287 3.218-1.94a1.7 1.7 0 0 0-.034-.38l-.783-3.595c-.18-.792-.338-1.15-1.652-1.845C15.07 4.911 12.85 4 12.193 4c-.611 0-.79.834-1.519.834-.701 0-1.222-.622-1.879-.622-.63 0-1.042.453-1.358 1.388 0 0-.884 2.635-.998 3.018a.7.7 0 0 0-.023.216c0 1.024 3.814 4.383 8.925 4.383m3.417-1.265c.182.91.182 1.005.182 1.126 0 1.555-1.653 2.419-3.828 2.419-4.912.003-9.216-3.041-9.216-5.053-.001-.28.053-.558.158-.815C4.288 9.722 2 10.056 2 12.19 2 15.69 9.838 20 16.043 20 20.8 20 22 17.725 22 15.929c0-1.415-1.156-3.019-3.24-3.977"
    />
  </svg>
);
export default SvgBrandRedhat;
