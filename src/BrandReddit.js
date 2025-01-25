import * as React from "react";
const SvgBrandReddit = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M12.428 8c2.27 0 4.309.826 5.72 2.14a1.86 1.86 0 0 1 1.488.03c.477.217.87.626 1.112 1.152.24.527.312 1.137.2 1.72-.11.583-.396 1.1-.806 1.458 0 3.59-3.454 6.5-7.713 6.5-4.179 0-7.581-2.8-7.714-6.294l-.857-.206c-.41-.358-.696-.875-.807-1.458a2.87 2.87 0 0 1 .201-1.72c.241-.526.636-.935 1.112-1.152a1.86 1.86 0 0 1 1.487-.03C7.262 8.827 9.302 8 11.571 8zm0 0 .857-5 5.142 1m-7.713 13q.856.5 1.714.5.856 0 1.714-.5M17.57 4c0 .265.09.52.251.707a.8.8 0 0 0 .606.293.8.8 0 0 0 .606-.293A1.1 1.1 0 0 0 19.284 4c0-.265-.09-.52-.25-.707A.8.8 0 0 0 18.426 3a.8.8 0 0 0-.606.293A1.1 1.1 0 0 0 17.57 4m-7.285 9c0 .276-.192.5-.429.5-.236 0-.428-.224-.428-.5s.192-.5.428-.5c.237 0 .429.224.429.5m5.142 0c0 .276-.191.5-.428.5s-.429-.224-.429-.5.192-.5.429-.5c.236 0 .428.224.428.5"
    />
  </svg>
);
export default SvgBrandReddit;
