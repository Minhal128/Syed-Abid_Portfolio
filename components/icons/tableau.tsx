import { IconProps } from "@/lib/types";
import React from "react";

const TableauIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#E97627"/>
    <g stroke="#fff" strokeWidth="1.2">
      <line x1="16" y1="7" x2="16" y2="25"/>
      <line x1="7" y1="16" x2="25" y2="16"/>
      <line x1="10" y1="10" x2="10" y2="22"/>
      <line x1="22" y1="10" x2="22" y2="22"/>
      <line x1="10" y1="10" x2="22" y2="10"/>
      <line x1="10" y1="22" x2="22" y2="22"/>
    </g>
  </svg>
);

export default TableauIcon; 