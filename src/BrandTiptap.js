import * as React from "react";
const SvgBrandTiptap = (props) => (
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
      d="M11 2c-1.658 0-3.21.448-4.545 1.23-.268.158-.386.508-.158.72.2.186.47.3.765.3h7.876c.295 0 .564-.114.765-.3.228-.212.11-.562-.158-.72A8.96 8.96 0 0 0 11 2"
    />
    <path
      fill="currentColor"
      d="M20 11c0-.621-.504-1.125-1.125-1.125H3.125a1.125 1.125 0 0 0 0 2.25h15.75c.621 0 1.125-.504 1.125-1.125"
    />
    <path
      fill="currentColor"
      d="M15.703 18.05c.228.212.11.563-.158.72A8.96 8.96 0 0 1 11 20a8.96 8.96 0 0 1-4.545-1.23c-.268-.157-.386-.508-.158-.72.2-.186.47-.3.765-.3h7.876c.295 0 .564.114.765.3"
    />
    <path
      fill="currentColor"
      d="M3.125 7.063c0-.622.504-1.125 1.125-1.125h13.5a1.125 1.125 0 0 1 0 2.25H4.25a1.125 1.125 0 0 1-1.125-1.126"
    />
    <path
      fill="currentColor"
      d="M3.125 14.938c0-.622.504-1.126 1.125-1.126h13.5a1.125 1.125 0 0 1 0 2.25H4.25a1.125 1.125 0 0 1-1.125-1.125"
    />
  </svg>
);
export default SvgBrandTiptap;
