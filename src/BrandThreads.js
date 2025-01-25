import * as React from "react";
const SvgBrandThreads = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M17.007 11.342a8 8 0 0 0-.275-.107c-.161-2.56-1.787-4.025-4.517-4.04h-.037c-1.634 0-2.991.6-3.828 1.69l1.501.887c.625-.815 1.605-.99 2.328-.99h.025c.898.006 1.576.23 2.016.669q.48.48.638 1.317a13.4 13.4 0 0 0-2.58-.106c-2.595.128-4.265 1.431-4.152 3.24.057.918.588 1.708 1.497 2.224.767.436 1.756.65 2.785.601 1.358-.064 2.422-.509 3.165-1.325.565-.618.921-1.42 1.08-2.43.646.335 1.126.778 1.39 1.308.45.905.477 2.389-.931 3.598-1.234 1.061-2.716 1.52-4.957 1.534-2.486-.016-4.365-.702-5.587-2.038-1.145-1.252-1.736-3.06-1.759-5.374.022-2.314.613-4.122 1.759-5.374C7.79 5.29 9.669 4.604 12.155 4.59c2.503.016 4.417.705 5.685 2.048.623.658 1.092 1.487 1.4 2.453L21 8.686q-.563-1.785-1.766-3.062C17.605 3.9 15.227 3.018 12.16 3h-.012c-3.06.018-5.412.904-6.994 2.632C3.75 7.171 3.023 9.312 3 11.994v.012c.023 2.684.75 4.823 2.155 6.362C6.736 20.097 9.09 20.982 12.15 21h.01c2.72-.016 4.638-.629 6.218-1.986 2.067-1.776 2.004-4.003 1.323-5.37-.489-.98-1.42-1.776-2.694-2.302m-4.697 3.8c-1.138.054-2.319-.385-2.377-1.326-.044-.697.577-1.475 2.447-1.57q.322-.015.631-.015c.68 0 1.316.057 1.893.166-.215 2.315-1.48 2.692-2.593 2.745z"
    />
  </svg>
);
export default SvgBrandThreads;
