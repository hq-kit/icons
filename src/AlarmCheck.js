import * as React from 'react'
const SvgAlarmCheck = (props) => (
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
    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3 2 6m20 0-3-3M6.38 18.7 4 21m13.64-2.33L20 21M9 13l2 2 4-4m5 2a8 8 0 1 1-16 0 8 8 0 0 1 16 0" />
  </svg>
)
export default SvgAlarmCheck