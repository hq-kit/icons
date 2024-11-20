import * as React from 'react'
const SvgSquareHalf = (props) => (
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
    <g stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} clipPath="url(#square-half_svg__a)">
      <path d="M12 4v16M3 5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2zM12 13l7.5-7.5M12 18l8-8M15 20l5-5M12 8l4-4" />
    </g>
    <defs>
      <clipPath id="square-half_svg__a">
        <path fill="#fff" d="M0 0h24v24H0z" />
      </clipPath>
    </defs>
  </svg>
)
export default SvgSquareHalf
