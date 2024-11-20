import * as React from 'react'
const SvgBeerOff = (props) => (
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
      d="M13 13v5m4-6.53V8m0 3h1a3.002 3.002 0 0 1 2.745 4.211M2 2l20 20M5 8v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2v-3M7.536 7.535C6.766 7.649 6.154 8 5.5 8a2.5 2.5 0 0 1-1.768-4.268m4.995-.528C9.307 2.767 9.885 2 11 2c1.56 0 2 1.5 3 1.5s1.72-.5 2.5-.5a2.5 2.5 0 0 1 0 5c-.78 0-1.5-.5-2.5-.5a3.2 3.2 0 0 0-.842.12M9 14.6V18"
    />
  </svg>
)
export default SvgBeerOff
