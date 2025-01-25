import * as React from "react";
const SvgBrandAstro = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M9.204 19.034c-.912-.825-1.178-2.56-.799-3.817.66.792 1.572 1.044 2.518 1.185 1.458.22 2.892.137 4.248-.524.155-.076.298-.177.467-.278.127.366.16.734.116 1.111-.108.915-.567 1.622-1.298 2.157-.292.214-.601.406-.904.609-.928.62-1.178 1.349-.83 2.409.009.025.016.05.034.114a2.43 2.43 0 0 1-1.082-.918 2.54 2.54 0 0 1-.417-1.4c-.005-.249-.005-.498-.038-.742-.082-.593-.364-.86-.893-.874a1.05 1.05 0 0 0-.705.216c-.2.155-.337.378-.384.626zM4 15.007s2.7-1.304 5.408-1.304l2.04-6.26c.077-.303.3-.509.552-.509s.475.206.552.51l2.04 6.26c3.207 0 5.408 1.303 5.408 1.303L15.405 2.602c-.131-.366-.354-.602-.653-.602H9.248c-.299 0-.512.236-.652.602C8.585 2.627 4 15.007 4 15.007"
    />
  </svg>
);
export default SvgBrandAstro;
