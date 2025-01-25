import * as React from "react";
const SvgBrandNvidia = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M9.711 9.176V7.915q.159-.015.318-.016c2.941-.11 4.87 2.976 4.87 2.976s-2.08 3.396-4.313 3.396c-.295 0-.588-.055-.868-.163v-3.833c1.146.163 1.377.756 2.06 2.103l1.53-1.511s-1.119-1.722-3-1.722q-.3-.008-.597.031m0-4.176v1.886l.318-.024c4.088-.163 6.758 3.942 6.758 3.942s-3.06 4.378-6.248 4.378a4 4 0 0 1-.821-.085v1.168c.225.031.457.055.682.055 2.968 0 5.115-1.784 7.195-3.888.344.327 1.755 1.114 2.047 1.457-1.974 1.947-6.578 3.514-9.19 3.514-.25 0-.489-.016-.727-.047V19H21V5zm0 9.107v.997c-2.743-.576-3.505-3.933-3.505-3.933s1.319-1.715 3.505-1.995v1.091h-.006c-1.146-.164-2.048 1.098-2.048 1.098s.51 2.127 2.055 2.743m-4.87-3.078s1.623-2.82 4.875-3.116V6.886C6.115 7.229 3 10.812 3 10.812s1.763 5.999 6.711 6.544v-1.09c-3.63-.53-4.869-5.236-4.869-5.236"
    />
  </svg>
);
export default SvgBrandNvidia;
