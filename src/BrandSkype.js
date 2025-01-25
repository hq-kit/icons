import * as React from "react";
const SvgBrandSkype = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="16"
    height="16"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M13.309 20.397a8.497 8.497 0 0 1-9.706-9.707 5.248 5.248 0 0 1 7.087-7.087q.642-.1 1.31-.1a8.498 8.498 0 0 1 8.397 9.807 5.248 5.248 0 0 1-7.088 7.087m-1.256-3.243h-.04c2.871 0 4.301-1.385 4.301-3.242 0-1.197-.55-2.47-2.725-2.957l-1.982-.44c-.755-.171-1.621-.4-1.621-1.114s.62-1.213 1.723-1.213c2.23 0 2.026 1.528 3.13 1.528.576 0 1.093-.342 1.093-.93 0-1.37-2.197-2.4-4.055-2.4-2.02 0-4.172.86-4.172 3.144 0 1.098.394 2.27 2.56 2.812l2.688.67c.815.203 1.017.66 1.017 1.072 0 .687-.683 1.358-1.917 1.358-2.416 0-2.077-1.857-3.373-1.857-.58 0-1.003.398-1.003.971 0 1.114 1.352 2.598 4.376 2.598"
    />
  </svg>
);
export default SvgBrandSkype;
