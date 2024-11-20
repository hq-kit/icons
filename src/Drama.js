import * as React from 'react'
const SvgDrama = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
    className={`cleon-icons ${props.className ? props.className : 'size-4'}`}
    data-slot="icon"
    aria-hidden="true"
  >
    <path
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M10 11h.01M14 6h.01M18 6h.01M6.5 13.1h.01M17.4 9.9c-.8.8-2 .8-2.8 0m-4.5-2.8C9 7.2 7.7 7.7 6 8.6c-3.5 2-4.7 3.9-3.7 5.6 4.5 7.8 9.5 8.4 11.2 7.4.9-.5 1.9-2.1 1.9-4.7m-6.3-.4c.3-1.1 1.4-1.7 2.4-1.4M22 5c0 9-4 12-6 12s-6-3-6-12q0-3 6-3t6 3"
    />
  </svg>
)
export default SvgDrama