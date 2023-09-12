import * as React from "react"
const Cargo = ({props} : any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <rect
      width={20}
      height={14}
      x={2}
      y={8}
      stroke="#28303F"
      strokeWidth={1.5}
      rx={4}
    />
    <path
      stroke="#28303F"
      strokeLinecap="round"
      strokeWidth={1.5}
      d="M12 12v6M7 12v6M17 12v6"
    />
    <path
      stroke="#28303F"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M12 2v2m0 0L6 8m6-4 6 4"
    />
  </svg>
)
export default Cargo