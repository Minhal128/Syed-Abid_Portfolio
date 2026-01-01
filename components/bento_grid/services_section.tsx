import React from "react";

export default function ServicesSection() {
  return (
    <div className="card_bg rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 lg:p-10">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <div className="inline-flex items-center gap-1 sm:gap-2 bg-green-100/10 border border-green-200/20 rounded-full px-2 sm:px-4 py-1 sm:py-2 mb-3 sm:mb-6">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-green-400 rounded-full"></div>
          <span className="text-green-400 text-xs sm:text-sm font-medium">Services</span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
          Data Simplified. Decisions Amplified.
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm md:text-lg max-w-2xl mx-auto">
          I don&apos;t just analyze data — I help you understand it, use it, and make it work for you.
        </p>
      </div>

      {/* Service Boxes */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6 lg:gap-8">
        {/* Data Cleaning & Prep Box */}
        <div className="dark:bg-background/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 group flex flex-col items-start text-left touch-manipulation">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/50 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:bg-gray-700/70 transition-colors duration-300">
            <svg
              className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
            Data Cleaning & Prep
          </h3>
          <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
            Noisy, messy, or missing data? I&apos;ll clean it up and structure it so it&apos;s ready to use.
          </p>
        </div>

        {/* Dashboard Design and Visualization Box */}
        <div className="dark:bg-background/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 group flex flex-col items-start text-left touch-manipulation">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/50 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:bg-gray-700/70 transition-colors duration-300">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
            Dashboard Design & Visualization
          </h3>
          <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
            Build easy-to-navigate dashboards in tools like Power BI, Tableau, Excel, or Sheets — no guesswork needed.
          </p>
        </div>

        {/* ETL & Data Integration Box */}
        <div className="dark:bg-background/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 group flex flex-col items-start text-left touch-manipulation">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/50 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:bg-gray-700/70 transition-colors duration-300">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
            ETL & Data Integration
          </h3>
          <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
            Automate data pipelines and bring together information from multiple sources, so you always have one source of truth.
          </p>
        </div>

        {/* Business Reporting & Insights Box */}
        <div className="dark:bg-background/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 group flex flex-col items-start text-left touch-manipulation">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/50 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:bg-gray-700/70 transition-colors duration-300">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
            Business Reporting & Insights
          </h3>
          <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
            Translate raw numbers into actionable insights with tailored reports that help you make smarter business decisions.
          </p>
        </div>

        {/* Performance Tracking & KPIs Box */}
        <div className="dark:bg-background/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 group flex flex-col items-start text-left touch-manipulation">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/50 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:bg-gray-700/70 transition-colors duration-300">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
            Performance Tracking & KPIs
          </h3>
          <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
            Identify and monitor the metrics that matter most, keeping your team aligned and focused on goals.
          </p>
        </div>

        {/* Training & Implementation Support Box */}
        <div className="dark:bg-background/10 rounded-xl sm:rounded-2xl p-4 sm:p-6 md:p-8 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 group flex flex-col items-start text-left touch-manipulation">
          <div className="flex items-center justify-center w-12 h-12 sm:w-16 sm:h-16 bg-gray-800/50 rounded-xl sm:rounded-2xl mb-4 sm:mb-6 group-hover:bg-gray-700/70 transition-colors duration-300">
            <svg className="w-6 h-6 sm:w-8 sm:h-8 text-gray-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4" />
            </svg>
          </div>
          <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2 sm:mb-4">
            Training & Implementation Support
          </h3>
          <p className="text-gray-400 leading-relaxed text-xs sm:text-sm md:text-base">
            I provide hands-on training and support to ensure your team can effectively use data tools and make the most of your analytics infrastructure.
          </p>
        </div>
      </div>
    </div>
  );
}
