import * as React from "react";
const SvgBrandJavascript = (props) => (
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
      fillRule="evenodd"
      d="M3.164 3.819C3 4.14 3 4.559 3 5.4v13.2c0 .84 0 1.26.164 1.581.144.283.372.512.655.655C4.14 21 4.559 21 5.4 21h13.2c.84 0 1.26 0 1.581-.164.283-.144.512-.372.655-.655.164-.321.164-.74.164-1.581V5.4c0-.84 0-1.26-.164-1.581a1.5 1.5 0 0 0-.655-.655C19.86 3 19.441 3 18.6 3H5.4c-.84 0-1.26 0-1.581.164a1.5 1.5 0 0 0-.655.655m14.11 10.734c1.586.644 2.121 1.332 2.253 2.154.126.706-.03 1.165-.054 1.233-.585 2.002-3.849 2.067-5.153.745l-.112-.126c-.213-.236-.36-.4-.5-.707l.697-.402.67-.387c.366.563.705.873 1.313 1 .827.1 1.66-.184 1.473-1.062-.112-.416-.663-.648-1.305-.92-.466-.198-.98-.415-1.41-.737-1.036-.697-1.28-2.39-.427-3.356.284-.358.769-.624 1.276-.753l.531-.068c1.017-.02 1.654.248 2.121.77.13.131.236.274.435.581l-.278.178c-.297.189-.423.269-1.04.668a1.26 1.26 0 0 0-.732-.68c-.452-.136-1.022.013-1.14.49-.04.147-.032.284.033.527.148.338.579.521 1.03.713q.16.067.318.14m-6.172-3.28h1.683q0 .774.002 1.548.005 1.544-.001 3.087 0 .21.004.414c.013.782.025 1.492-.302 2.094-.266.54-.771.894-1.36 1.065-.901.207-1.763.089-2.405-.296-.43-.264-.765-.669-.992-1.136l.684-.419.684-.42a.6.6 0 0 1 .081.127l.016.027c.174.293.325.5.62.645.291.1.93.162 1.176-.349.12-.207.114-.79.107-1.487q-.004-.266-.004-.547 0-1.09.003-2.177.004-1.086.004-2.176"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgBrandJavascript;
