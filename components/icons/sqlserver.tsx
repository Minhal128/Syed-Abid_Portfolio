import { IconProps } from "@/lib/types";
import React from "react";

const SQLServerIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#fff"/>
    <path d="M6 24C14 18 26 18 26 24" stroke="#CC2927" strokeWidth="2" fill="none"/>
    <path d="M8 20C14 14 24 14 24 20" stroke="#CC2927" strokeWidth="2" fill="none"/>
    <ellipse cx="16" cy="10" rx="8" ry="3" fill="#CC2927" fillOpacity=".7"/>
  </svg>
);

export default SQLServerIcon; 