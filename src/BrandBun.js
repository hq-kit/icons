import * as React from "react";
const SvgBrandBun = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
   className={`${props.className ? props.className : "size-4"}`} data-slot="icon" aria-hidden="true">
    <path
      fill="currentColor"
      d="M12 21c4.971 0 9-3.685 9-8.229 0-2.818-1.543-5.307-3.914-6.783-.965-.607-1.723-1.153-2.354-1.605C13.544 3.527 12.81 3 12 3c-.823 0-1.75.667-2.975 1.547q-1.035.76-2.112 1.441C4.544 7.464 3 9.953 3 12.771 3 17.315 7.029 21 12 21zM10.95 5.812c.25-.644.377-1.342.373-2.046 0-.123.151-.159.172-.024.494 2.363-.676 3.535-1.542 3.927-.093.04-.15-.103-.078-.177.46-.468.825-1.04 1.074-1.68m1.543-.086a5.4 5.4 0 0 0-.587-1.959v-.014c-.052-.104.065-.223.139-.146 1.472 1.793.98 3.455.417 4.29-.062.088-.172-.002-.142-.107.185-.666.244-1.37.173-2.064m1.332-.477a4.7 4.7 0 0 0-1.21-1.534v-.012c-.083-.072-.017-.232.086-.185 1.947.923 2.08 2.701 1.845 3.743a.1.1 0 0 1-.037.06.08.08 0 0 1-.062.016.08.08 0 0 1-.053-.037.1.1 0 0 1-.017-.07 5.5 5.5 0 0 0-.552-1.98m-3.815.477c-.463.463-.962.645-1.548.849-.088 0-.146-.066-.117-.154 1.314-.772 1.782-1.4 2.25-2.36 0 0 .116-.1.14.073 0 .258-.261 1.129-.726 1.592m3.708 9.544a2.6 2.6 0 0 1-.703 1.32c-.259.293-.6.48-.964.526a1.56 1.56 0 0 1-.995-.527 2.6 2.6 0 0 1-.694-1.319.23.23 0 0 1 .048-.168.2.2 0 0 1 .066-.049.15.15 0 0 1 .079-.01h2.973a.15.15 0 0 1 .078.011q.037.015.065.049a.22.22 0 0 1 .047.167m-4.093-1.848c-.272.21-.6.303-.928.265a1.34 1.34 0 0 1-.86-.473 1.8 1.8 0 0 1-.407-1.005c-.032-.377.05-.756.232-1.074.155-.27.377-.48.636-.605.258-.125.544-.158.819-.094s.527.222.725.451c.199.234.333.528.388.847s.026.648-.082.949a1.6 1.6 0 0 1-.523.739m6.371.004c-.272.208-.6.3-.928.261a1.34 1.34 0 0 1-.858-.476 1.8 1.8 0 0 1-.41-1.16c0-.326.082-.646.24-.917.155-.27.377-.481.637-.605.258-.124.544-.156.82-.092.275.065.527.223.726.454.198.235.331.53.384.848.054.32.024.65-.084.95s-.291.556-.527.737"
    />
  </svg>
);
export default SvgBrandBun;
