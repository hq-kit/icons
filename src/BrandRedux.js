import * as React from "react";
const SvgBrandRedux = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M16.54 7.235C15.735 4.731 14.004 3 12 3 9.226 3 6.977 5.787 6.977 9.878c0 2.072 1.582 5.006 2.512 6.354M4.71 12.508c-1.656 1.987-2.214 4.431-1.211 6.259 1.387 2.53 5.138 2.997 8.5.953 1.704-1.037 2.876-3.56 3.517-5.08m-.503 6.35c2.51 0 4.523-.463 5.487-2.223 1.387-2.531-.215-6.24-3.58-8.285-1.701-1.037-4.356-1.308-5.926-1.133m-.502.917c.48.292 1.095.119 1.372-.388.132-.243.168-.532.099-.803a1.05 1.05 0 0 0-.466-.642.96.96 0 0 0-.762-.106c-.258.072-.477.25-.611.494a1.11 1.11 0 0 0-.099.803c.07.271.237.502.467.642M8.5 16.236c0 .28.105.55.293.749.187.198.442.31.707.31s.52-.112.707-.31c.188-.199.293-.468.293-.75 0-.28-.105-.55-.293-.748a.97.97 0 0 0-.707-.31.97.97 0 0 0-.707.31 1.1 1.1 0 0 0-.293.749m6-1.588c0 .28.105.55.293.748.187.199.442.31.707.31s.52-.111.707-.31a1.1 1.1 0 0 0 .293-.748c0-.281-.105-.55-.293-.75a.97.97 0 0 0-.707-.31.97.97 0 0 0-.707.31 1.1 1.1 0 0 0-.293.75"
    />
  </svg>
);
export default SvgBrandRedux;
