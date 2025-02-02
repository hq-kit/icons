import * as React from "react";
const SvgBrandTwitter = (props) => (
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
      d="M22 5.118c-.736.37-1.53.614-2.352.73.841-.56 1.492-1.45 1.797-2.52-.793.53-1.672.9-2.6 1.112C18.09 3.53 17.03 3 15.825 3c-2.248 0-4.083 2.033-4.083 4.542 0 .36.038.71.105 1.038-3.403-.19-6.434-2.001-8.451-4.744a4.9 4.9 0 0 0-.555 2.277c0 1.578.717 2.975 1.826 3.77-.678 0-1.31-.212-1.864-.53v.032c0 2.202 1.415 4.044 3.289 4.457a3.64 3.64 0 0 1-1.845.074c.26.903.768 1.693 1.454 2.259s1.515.88 2.37.897c-1.45 1.27-3.247 1.958-5.096 1.948q-.487 0-.975-.064C3.816 20.249 5.977 21 8.29 21c7.534 0 11.674-6.925 11.674-12.928 0-.201 0-.392-.01-.593A8.7 8.7 0 0 0 22 5.118"
    />
  </svg>
);
export default SvgBrandTwitter;
