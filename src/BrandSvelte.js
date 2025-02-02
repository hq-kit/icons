import * as React from "react";
const SvgBrandSvelte = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`hq-icons ${props.className || "size-4"}`} data-slot={props["data-slot"] || "icon"} aria-hidden="true">
    <path
      fill="currentColor"
      d="M10.682 18.844a3.8 3.8 0 0 1-2.132-.1 3.54 3.54 0 0 1-1.686-1.225 3 3 0 0 1-.533-1.112 2.9 2.9 0 0 1-.03-1.219q.04-.198.107-.391l.084-.24.23.157c.53.364 1.122.641 1.751.819l.167.047-.016.156a.9.9 0 0 0 .181.622c.125.17.302.298.508.37.206.07.43.081.642.03a1 1 0 0 0 .275-.112l4.478-2.672a.9.9 0 0 0 .276-.25.84.84 0 0 0 .135-.7.9.9 0 0 0-.16-.336 1.07 1.07 0 0 0-.508-.369 1.14 1.14 0 0 0-.642-.03 1 1 0 0 0-.274.112l-1.71 1.02c-.28.168-.587.294-.909.374a3.8 3.8 0 0 1-2.131-.1 3.54 3.54 0 0 1-1.686-1.225 3 3 0 0 1-.533-1.112 2.9 2.9 0 0 1-.03-1.219c.076-.395.24-.772.48-1.105.24-.334.552-.617.916-.831l4.478-2.672a3.3 3.3 0 0 1 .909-.374 3.8 3.8 0 0 1 2.131.1 3.54 3.54 0 0 1 1.687 1.225c.255.333.436.711.533 1.112.097.4.107.814.03 1.218a3 3 0 0 1-.107.392l-.084.24-.23-.157a6 6 0 0 0-1.752-.82l-.166-.047.015-.155a.9.9 0 0 0-.18-.624 1.07 1.07 0 0 0-.509-.368 1.14 1.14 0 0 0-.641-.03 1 1 0 0 0-.275.112l-4.479 2.671a.9.9 0 0 0-.275.25.84.84 0 0 0-.136.701c.03.12.084.235.16.335.126.17.303.298.508.37.206.07.43.082.642.03a1 1 0 0 0 .276-.113l1.708-1.02c.28-.168.587-.294.91-.373a3.8 3.8 0 0 1 2.13.1 3.54 3.54 0 0 1 1.687 1.224c.255.334.436.712.533 1.112s.107.815.03 1.219c-.077.396-.24.773-.48 1.106a3 3 0 0 1-.916.831L11.59 18.47c-.28.168-.587.294-.91.374M18.98 5.382c-1.785-2.393-5.312-3.102-7.861-1.58L6.64 6.471a5 5 0 0 0-1.524 1.382c-.4.555-.67 1.181-.796 1.84a4.78 4.78 0 0 0 .534 3.252 4.6 4.6 0 0 0-.77 1.797c-.127.672-.11 1.36.05 2.026a5 5 0 0 0 .886 1.85c1.786 2.392 5.312 3.1 7.862 1.58l4.478-2.671a5 5 0 0 0 1.524-1.381c.4-.555.67-1.182.796-1.84a4.8 4.8 0 0 0-.532-3.252 4.6 4.6 0 0 0 .767-1.797c.128-.672.111-1.361-.05-2.027a5 5 0 0 0-.885-1.85"
    />
  </svg>
);
export default SvgBrandSvelte;
