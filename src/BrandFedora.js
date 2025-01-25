import * as React from "react";
const SvgBrandFedora = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 3c-4.95 0-9 4.023-9 9v6.957C3 20.1 3.9 21 5.043 21H12c4.977 0 9-4.05 9-9s-4.05-9-9-9m1.827 3.708c1.512 0 2.934 1.152 2.934 2.754 0 .144 0 .288-.018.459a.764.764 0 0 1-.855.675.755.755 0 0 1-.63-.882c0-.054.009-.126.009-.252 0-.909-.738-1.26-1.44-1.26s-1.332.594-1.332 1.26c.009.765 0 1.53 0 2.304l1.305-.018c1.008-.018 1.017 1.512 0 1.503l-1.305.009-.009 2.151c-.162 1.692-1.593 3.033-3.321 3.033-1.827 0-3.339-1.494-3.339-3.33A3.42 3.42 0 0 1 9.3 11.766l1.035-.009v1.503l-1.035.009h-.027c-1.044.027-1.935.738-1.944 1.854a1.83 1.83 0 0 0 1.836 1.827c1.035 0 1.827-.747 1.827-1.827.018-1.809-.009-3.798 0-5.67 0-.108.009-.189.018-.306.171-1.386 1.413-2.439 2.817-2.439"
    />
  </svg>
);
export default SvgBrandFedora;
