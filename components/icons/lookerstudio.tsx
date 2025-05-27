import { IconProps } from "@/lib/types";
import React from "react";

const LookerStudioIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#4285F4"/>
    <circle cx="10" cy="16" r="3" fill="#fff"/>
    <rect x="15" y="13" width="7" height="6" rx="3" fill="#fff"/>
    <rect x="10" y="22" width="12" height="3" rx="1.5" fill="#fff"/>
  </svg>
);

export default LookerStudioIcon; 