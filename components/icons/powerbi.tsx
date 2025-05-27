import { IconProps } from "@/lib/types";
import React from "react";

const PowerBIIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#F2C811"/>
    <path d="M8.5 21.5V13.5C8.5 12.6716 9.17157 12 10 12C10.8284 12 11.5 12.6716 11.5 13.5V21.5C11.5 22.3284 10.8284 23 10 23C9.17157 23 8.5 22.3284 8.5 21.5Z" fill="#000"/>
    <rect x="13" y="10" width="3" height="13" rx="1.5" fill="#000"/>
    <rect x="18" y="7" width="3" height="16" rx="1.5" fill="#000"/>
    <rect x="23" y="15" width="3" height="8" rx="1.5" fill="#000"/>
  </svg>
);

export default PowerBIIcon; 