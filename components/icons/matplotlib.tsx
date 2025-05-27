import { IconProps } from "@/lib/types";
import React from "react";

const MatplotlibIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#fff"/>
    <circle cx="16" cy="16" r="10" stroke="#11557C" strokeWidth="2" fill="none"/>
    <path d="M16 16 L24 10" stroke="#FF9900" strokeWidth="2"/>
    <circle cx="24" cy="10" r="1.5" fill="#FF9900"/>
    <circle cx="16" cy="16" r="1.5" fill="#11557C"/>
  </svg>
);

export default MatplotlibIcon; 