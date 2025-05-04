import React from "react";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  return (
    <>
      <footer className="flex flex-col items-center justify-center py-10 text-sm text-gray-600">
        <div>© {currentYear} Syed Abid Hassan. All rights reserved.</div>
        <div>Developed By Minhal128</div>
      </footer>
    </>
  );
}
