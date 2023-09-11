import * as React from "react";
const ArrowDown = ({ props }: any) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="none"
    {...props}
  >
    <g clipPath="url(#a)">
      <path
        fill="#000"
        fillRule="evenodd"
        d="M7.412 9.162a.583.583 0 0 1-.824 0l-3.3-3.3a.583.583 0 1 1 .825-.824L7 7.925l2.888-2.887a.583.583 0 0 1 .824.825l-3.3 3.3Z"
        clipRule="evenodd"
      />
    </g>
    <defs>
      <clipPath id="a">
        <path fill="#fff" d="M0 0h14v14H0z" />
      </clipPath>
    </defs>
  </svg>
);
export default ArrowDown;
