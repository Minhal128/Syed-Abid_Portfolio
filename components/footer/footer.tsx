import React from "react";
import Link from "next/link";

export default function Footer() {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();
  
  return (
    <>
      <footer className="flex flex-col items-center justify-center py-6 md:py-10 text-sm border-t border-gray-800 mt-10">
        <div className="flex flex-col items-center gap-3 w-full px-4">
          {/* Name */}
          <h2 className="text-xl md:text-3xl font-bold text-white tracking-wider text-center">
            Syed Abid Hassan
          </h2>
          
          {/* Social Links and CTA Button */}
          <div className="flex items-center justify-center gap-1 sm:gap-2 touch-manipulation">
            {/* Email */}
            <Link 
              href="mailto:your-email@example.com" 
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg hover:bg-gray-800/50 transition-colors touch-manipulation min-h-[44px] min-w-[44px]"
              aria-label="Email"
            >
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z"></path>
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z"></path>
              </svg>
            </Link>

            {/* LinkedIn */}
            <Link 
              href="https://linkedin.com/in/syed-abid" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg hover:bg-gray-800/50 transition-colors touch-manipulation min-h-[44px] min-w-[44px]"
              aria-label="LinkedIn"
            >
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.725-2.004 1.425-.103.25-.129.599-.129.949v5.431h-3.554s.047-8.842 0-9.769h3.554v1.384c.43-.664 1.198-1.61 2.914-1.61 2.122 0 3.715 1.388 3.715 4.369v5.626zM5.337 8.855c-1.144 0-1.915-.758-1.915-1.704 0-.951.765-1.703 1.97-1.703 1.203 0 1.914.752 1.94 1.703 0 .946-.737 1.704-1.995 1.704zm1.946 11.597H3.392V9.865h3.891v10.587zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z"></path>
              </svg>
            </Link>

            {/* GitHub */}
            <Link 
              href="https://github.com/syed-abid" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg hover:bg-gray-800/50 transition-colors touch-manipulation min-h-[44px] min-w-[44px]"
              aria-label="GitHub"
            >
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"></path>
              </svg>
            </Link>

            {/* Facebook */}
            <Link 
              href="https://facebook.com/syed.abid" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg hover:bg-gray-800/50 transition-colors touch-manipulation min-h-[44px] min-w-[44px]"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"></path>
              </svg>
            </Link>

            {/* X (Twitter) */}
            <Link 
              href="https://twitter.com/syed_abid" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-8 h-8 sm:w-9 sm:h-9 rounded-lg hover:bg-gray-800/50 transition-colors touch-manipulation min-h-[44px] min-w-[44px]"
              aria-label="X (Twitter)"
            >
              <svg className="w-4 h-4 text-gray-300" fill="currentColor" viewBox="0 0 24 24">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.514l-5.106-6.665-5.829 6.665H2.306l7.644-8.76L1 2.25h6.678l4.703 6.222 5.857-6.222zM17.25 20.428h1.827L6.883 3.995H5.074l12.176 16.433z"></path>
              </svg>
            </Link>

            {/* Session Button */}
            <Link 
              href="https://topmate.io/syed_abid/" 
              target="_blank"
              rel="noopener noreferrer"
              className="ml-1 sm:ml-2 px-2 sm:px-3 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold text-[10px] sm:text-xs transition-colors flex items-center gap-1 whitespace-nowrap touch-manipulation min-h-[44px]"
            >
              <span>1:1 Session</span>
              <svg className="w-3 h-3 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </Link>
          </div>

          {/* Copyright */}
          <div className="text-center text-gray-500 text-[10px] sm:text-xs mt-3 border-t border-gray-800 pt-3 w-full">
            <div>© {currentYear} Syed Abid Hassan. All rights reserved.</div>
            <div>Developed By Minhal128</div>
          </div>
        </div>
      </footer>
    </>
  );
}
