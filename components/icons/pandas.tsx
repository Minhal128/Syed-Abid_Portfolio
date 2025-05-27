import { IconProps } from "@/lib/types";
import React from "react";

const PandasIcon: React.FC<IconProps> = ({ width, height }) => (
  <svg width={width} height={height} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
    <rect width="32" height="32" rx="6" fill="#fff"/>
    <rect x="8" y="6" width="2" height="20" rx="1" fill="#150458"/>
    <rect x="14" y="10" width="2" height="12" rx="1" fill="#E70488"/>
    <rect x="20" y="8" width="2" height="16" rx="1" fill="#150458"/>
    <circle cx="15" cy="25" r="1" fill="#E70488"/>
    <circle cx="21" cy="11" r="1" fill="#E70488"/>
  </svg>
);

export default PandasIcon; 