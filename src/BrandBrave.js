import * as React from "react";
const SvgBrandBrave = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    fill="none"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="m14.88 3 1.64 1.785s1.44-.384 2.12.268c.68.653 1.24 1.229 1.24 1.229l-.44 1.036.56 1.535s-1.647 5.985-1.84 6.716c-.38 1.44-.64 1.995-1.72 2.725q-1.665 1.116-3.36 2.187c-.32.192-.72.519-1.08.519s-.76-.327-1.08-.519q-1.695-1.071-3.36-2.187c-1.08-.73-1.34-1.285-1.72-2.725C5.647 14.838 4 8.853 4 8.853l.56-1.535-.44-1.036s.56-.576 1.24-1.229c.68-.652 2.12-.268 2.12-.268L9.12 3zM12 14.202c-.11 0-.812.238-1.376.518s-.972.477-1.103.556c-.13.079-.05.226.068.307a97 97 0 0 1 1.873 1.4c.155.13.383.347.538.347s.383-.217.539-.348c.155-.13 1.753-1.319 1.872-1.4s.199-.228.068-.307c-.13-.079-.54-.276-1.104-.556-.563-.28-1.265-.517-1.375-.517m0-8.458s-.32 0-.8.154-1 .345-1.24.345-2.02-.325-2.02-.325-2.11 2.446-2.11 2.969.266.66.533.932l1.581 1.612c.15.152.462.383.279.8-.184.415-.454.944-.154 1.482.3.537.816.896 1.146.836s1.105-.448 1.39-.625c.285-.178 1.188-.893 1.188-1.166s-.933-.765-1.106-.876c-.172-.112-.96-.543-.976-.712-.015-.17-.009-.22.223-.639s.65-.978.58-1.35c-.07-.37-.743-.564-1.224-.739-.482-.175-1.409-.503-1.524-.555-.116-.052-.087-.1.265-.131.35-.033 1.345-.16 1.794-.04.448.12 1.215.303 1.277.4s.117.1.053.434-.392 1.936-.424 2.22-.094.473.226.543.858.192 1.043.192.723-.122 1.043-.192.258-.258.226-.542c-.031-.285-.36-1.887-.424-2.221-.063-.334-.01-.338.053-.434.062-.097.829-.28 1.277-.4.449-.12 1.444.007 1.794.04.351.031.381.08.265.131s-1.042.381-1.524.555c-.48.175-1.155.367-1.224.74-.07.371.348.93.58 1.35.233.419.238.467.223.637-.016.17-.803.601-.976.713s-1.106.603-1.106.876.903.988 1.188 1.166 1.06.566 1.39.625.845-.3 1.146-.836c.3-.537.03-1.066-.153-1.483-.183-.416.128-.647.278-.8l1.581-1.611c.267-.272.532-.41.532-.932 0-.523-2.11-2.97-2.11-2.97s-1.779.327-2.019.327c-.239 0-.76-.192-1.24-.346s-.8-.154-.8-.154"
    />
  </svg>
);
export default SvgBrandBrave;
