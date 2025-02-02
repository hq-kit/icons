import * as React from "react";
const SvgBrandInstagram = (props) => (
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
      d="M12 4.622c2.403 0 2.688.01 3.637.052.57.008 1.135.112 1.67.31.391.145.745.374 1.036.673.299.291.528.645.672 1.036.2.534.303 1.099.311 1.67.044.95.052 1.234.052 3.637s-.01 2.688-.052 3.637a5 5 0 0 1-.31 1.67 2.99 2.99 0 0 1-1.709 1.71 5 5 0 0 1-1.67.309c-.95.044-1.235.052-3.637.052s-2.688-.01-3.637-.052a5 5 0 0 1-1.671-.31 2.8 2.8 0 0 1-1.035-.673 2.8 2.8 0 0 1-.672-1.036 5 5 0 0 1-.311-1.67c-.044-.95-.052-1.234-.052-3.637s.01-2.688.052-3.637c.008-.57.112-1.135.31-1.67.145-.391.374-.745.673-1.036.291-.299.645-.528 1.036-.672a5 5 0 0 1 1.67-.311c.95-.044 1.234-.052 3.637-.052M12 3c-2.444 0-2.751.01-3.71.054a6.6 6.6 0 0 0-2.185.418c-.601.226-1.145.58-1.595 1.039-.458.45-.812.994-1.038 1.594-.261.7-.402 1.438-.417 2.184C3.009 9.25 3 9.556 3 12s.01 2.75.054 3.71c.015.747.156 1.485.418 2.185.226.6.58 1.145 1.039 1.595.45.458.994.812 1.594 1.038.7.261 1.438.402 2.184.417.96.046 1.267.055 3.711.055s2.75-.01 3.71-.054a6.6 6.6 0 0 0 2.185-.418 4.6 4.6 0 0 0 2.633-2.633c.261-.7.402-1.438.417-2.184.046-.96.055-1.267.055-3.711s-.01-2.751-.054-3.71a6.6 6.6 0 0 0-.418-2.185 4.4 4.4 0 0 0-1.04-1.595 4.4 4.4 0 0 0-1.593-1.038 6.6 6.6 0 0 0-2.184-.417C14.75 3.009 14.444 3 12 3m0 4.378a4.622 4.622 0 1 0 0 9.244 4.622 4.622 0 0 0 0-9.244M12 15a3 3 0 1 1 0-6 3 3 0 0 1 0 6m4.804-8.884a1.08 1.08 0 1 0 0 2.16 1.08 1.08 0 0 0 0-2.16"
    />
  </svg>
);
export default SvgBrandInstagram;
