import React from "react";

export default function Logo() {
  return (
    <>
      <svg
        className="w-8 h-8"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 256 256"
      >
        <rect width="256" height="256" fill="none" />
        <circle
          cx="128"
          cy="96"
          r="64"
          fill="none"
          stroke="#000"
          strokeMiterlimit="10"
          strokeWidth="16"
        />
        <path
          fill="none"
          stroke="#000"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth="16"
          d="M30.989,215.99064a112.03731,112.03731,0,0,1,194.02311.002"
        />
      </svg>
    </>
  );
}
