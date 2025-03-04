import * as React from "react";
const SvgBrandEnvato = (props) => (
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
      d="M4.711 17.875c-.534-1.339-1.35-4.178.129-6.47 1.415-2.193 3.769-3.608 5.099-4.278z"
    />
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M19.715 12.508c-.54 3.409-2.094 6.156-4.155 7.348-4.069 2.353-8.144.45-9.297-.188.877-1.436 4.433-7.22 6.882-10.591C15.859 5.34 19.009 3.099 19.71 3c0 .201.03.55.071 1.03.144 1.709.443 5.264-.066 8.478"
    />
  </svg>
);
export default SvgBrandEnvato;
