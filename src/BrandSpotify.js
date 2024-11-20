import * as React from 'react'
const SvgBrandSpotify = (props) => (
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
      fill="currentColor"
      d="M12 3c-4.95 0-9 4.05-9 9s4.05 9 9 9 9-4.05 9-9-4.005-9-9-9m4.14 13.005c-.18.27-.494.36-.765.18-2.115-1.305-4.77-1.576-7.92-.856-.314.092-.585-.134-.675-.404-.09-.316.135-.585.405-.675 3.42-.766 6.39-.45 8.73.99.315.135.36.494.226.765m1.08-2.475c-.225.315-.63.45-.946.225-2.429-1.485-6.119-1.935-8.954-1.035-.36.09-.765-.09-.855-.45s.09-.766.45-.856c3.285-.989 7.335-.493 10.125 1.216.27.136.405.585.18.9m.09-2.52C14.43 9.3 9.616 9.12 6.87 9.976a.845.845 0 0 1-1.035-.541.845.845 0 0 1 .54-1.036c3.195-.945 8.46-.765 11.79 1.216.405.225.54.765.315 1.17-.224.316-.765.45-1.17.225"
    />
  </svg>
)
export default SvgBrandSpotify