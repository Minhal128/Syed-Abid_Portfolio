import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Instagram } from "lucide-react";
import HtmlIcon from "@/components/icons/html";
import CssIcon from "@/components/icons/css";
import LinkedInIcon from "@/components/icons/linkedIn";
import MongoDBIcon from "@/components/icons/mongodb";
import MySQLIcon from "@/components/icons/mysql";
import PostgreSQLIcon from "@/components/icons/postgresql";
import PythonIcon from "@/components/icons/python";
import { BorderBeam } from "@/components/magicui/border-beam";
import PowerBIIcon from "@/components/icons/powerbi";
import TableauIcon from "@/components/icons/tableau";
import LookerStudioIcon from "@/components/icons/lookerstudio";
import PandasIcon from "@/components/icons/pandas";
import MatplotlibIcon from "@/components/icons/matplotlib";
import SQLServerIcon from "@/components/icons/sqlserver";
import ExperienceSection from "@/components/experience/ExperienceSection";

export default function Page() {
  const contactData = [
    {
      icons: <Instagram className="w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />,
      name: "Instagram",
      url: "https://www.instagram.com/syedabid3527/",
    },
    {
      icons: <LinkedInIcon width={16} height={16} className="sm:w-5 sm:h-5" />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/syed-abid-hassan-bb569b1b8",
    },
  ];

  return (
    <div className="flex flex-col gap-3 sm:gap-4 md:gap-6 lg:gap-10 w-full overflow-x-hidden">
      {/* Profile and About Section */}
      <div className="flex flex-col lg:flex-row gap-3 sm:gap-4 md:gap-6 lg:gap-10 w-full">
        {/* Left Section - Profile Card */}
        <div className="w-full lg:w-1/3 card_bg p-3 sm:p-4 md:p-6 lg:p-8 flex flex-col items-center">
          <div className="flex items-center justify-center mb-3 sm:mb-4">
            <Image
              src="/_DSC8303.png"
              alt="profile"
              width={150}
              height={60}
              className="w-[100px] sm:w-[120px] md:w-[150px] lg:w-[180px] h-auto"
              priority
            />
          </div>
          <div className="flex flex-col gap-1.5 sm:gap-2 text-center w-full">
            <h1 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold">Syed Abid Hassan</h1>
            <p>
              <a
                href="mailto:abidhassanjaffri31@gmail.com"
                className="opacity-50 text-[10px] sm:text-xs md:text-sm break-all"
              >
                @abidhassanjaffri31
              </a>
            </p>
            <div className="flex gap-1.5 sm:gap-2 md:gap-3 items-center justify-center my-1.5 sm:my-2">
              {contactData.map((contact, index) => (
                <a
                  href={contact.url}
                  key={index}
                  className="card_bg p-1 sm:p-1.5 md:p-2 rounded-lg hover:bg-white/10 transition-colors touch-manipulation"
                >
                  {contact.icons}
                </a>
              ))}
            </div>
            <Button className="cursor-pointer z-50 w-full mt-1.5 sm:mt-2 text-xs sm:text-sm touch-manipulation">
              <a href="mailto:abidhassanjafri31@gmail.com">Contact Me</a>
            </Button>
          </div>
        </div>

        {/* Right Section - About Me */}
        <div className="w-full lg:w-2/3 flex flex-col gap-3 sm:gap-4 md:gap-6">
          <div className="card_bg p-3 sm:p-4 md:p-6 lg:p-8 rounded-2xl sm:rounded-3xl">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">About Me</h2>
            <div className="text-gray-400 text-[10px] sm:text-xs md:text-sm leading-relaxed">
              <p className="mb-2 sm:mb-3 md:mb-4">
                I am a Computer Science graduate with a solid interest and passion in Data Analytics &amp; Business Intelligence.
                Keeping this passion and interest as my top most priority, I have/am :
              </p>
              <ul className="list-none space-y-1 sm:space-y-1.5 md:space-y-2">
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>Currently working as an <strong>Instructor</strong> at <strong>KultureHire</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span><strong>BI Programmer</strong> at <strong>Centegy Technologies</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>Among the 𝐓𝐨𝐩 1% Experts on 𝐓𝐨𝐩𝐦𝐚𝐭𝐞. ✅</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>An <strong>IT Domain Leader for Pakistan</strong> at <strong>Aspire Institute</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>Been within the <strong>Top 50 Teams</strong> in <em>Unilever Talent Hunt &apos;25</em>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>Won a <strong>Resume Competition</strong>, organized by <strong>ASME QUEST Chapter</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>A <strong>Google certified Business Intelligence Professional</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>Worked on multiple internships using <strong>Power BI</strong>, <strong>SQL</strong>, and <strong>Excel</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>Earned certifications in <strong>SQL</strong>, <strong>Python</strong>, and <strong>Power BI</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>Won the <strong>Best Brand Ambassador</strong> award.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>Got <strong>Badge of Distinction 2024</strong> from <strong>The Talent Games</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-1.5 sm:mr-2 flex-shrink-0">➡</span>
                  <span>Active member of <strong>Pakistan-U.S. Alumni Network</strong> and <strong>Youth Parliament Pakistan</strong>.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <div className="w-full">
            <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4">Skills</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
              {/* Programming Languages */}
              <div className="card_bg p-2.5 sm:p-3 md:p-4 lg:p-5 relative overflow-hidden">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1.5 sm:mb-2 md:mb-3">
                  Programming Languages
                </h3>
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                  <div className="flex bg-blue-600/5 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 gap-2 sm:gap-3 md:gap-4 justify-center">
                    <PythonIcon width={24} height={24} className="sm:w-8 sm:h-8" />
                  </div>
                  <div className="flex rounded-xl sm:rounded-2xl p-1.5 sm:p-2 gap-2 sm:gap-3 md:gap-4 justify-center">
                    <HtmlIcon width={24} height={24} className="sm:w-8 sm:h-8" />
                    <CssIcon width={24} height={24} className="sm:w-8 sm:h-8" />
                  </div>
                </div>
                <BorderBeam duration={6} size={100} />
              </div>

              {/* Visualization Tools */}
              <div className="card_bg p-2.5 sm:p-3 md:p-4 lg:p-5 relative overflow-hidden">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1.5 sm:mb-2 md:mb-3">
                  Visualization Tools
                </h3>
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                  <div className="flex bg-green-600/5 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 gap-1.5 sm:gap-2 md:gap-3 justify-center">
                    <PowerBIIcon width={20} height={20} className="sm:w-7 sm:h-7" />
                    <TableauIcon width={20} height={20} className="sm:w-7 sm:h-7" />
                    <LookerStudioIcon width={20} height={20} className="sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex rounded-xl sm:rounded-2xl p-1.5 sm:p-2 gap-2 sm:gap-3 md:gap-4 justify-center">
                    <PandasIcon width={20} height={20} className="sm:w-7 sm:h-7" />
                    <MatplotlibIcon width={20} height={20} className="sm:w-7 sm:h-7" />
                  </div>
                </div>
                <BorderBeam duration={5} size={100} />
              </div>

              {/* Database & Backend */}
              <div className="card_bg p-2.5 sm:p-3 md:p-4 lg:p-5 relative overflow-hidden sm:col-span-2 xl:col-span-1">
                <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-semibold mb-1.5 sm:mb-2 md:mb-3">
                  Database & Backend
                </h3>
                <div className="flex flex-col gap-1.5 sm:gap-2 md:gap-3">
                  <div className="flex bg-green-600/5 rounded-xl sm:rounded-2xl p-1.5 sm:p-2 gap-2 sm:gap-3 md:gap-4 justify-center">
                    <PostgreSQLIcon width={20} height={20} className="sm:w-7 sm:h-7" />
                    <SQLServerIcon width={20} height={20} className="sm:w-7 sm:h-7" />
                  </div>
                  <div className="flex rounded-xl sm:rounded-2xl p-1.5 sm:p-2 gap-2 sm:gap-3 md:gap-4 justify-center">
                    <MongoDBIcon width={20} height={20} className="sm:w-7 sm:h-7" />
                    <MySQLIcon width={20} height={20} className="sm:w-7 sm:h-7" />
                  </div>
                </div>
                <BorderBeam duration={4} size={100} />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Experience Section */}
      <ExperienceSection />

      {/* Education Section */}
      <section className="w-full">
        <h2 className="text-base sm:text-lg md:text-xl lg:text-2xl font-bold mb-2 sm:mb-3 md:mb-4 lg:mb-6">Education</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 sm:gap-3 md:gap-4">
          {/* NED University */}
          <div className="card_bg p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl flex flex-col h-full">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2">NED University of Engineering and Technology</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mb-1.5 sm:mb-2">
              Master of Science - MS, Data Engineering and Information Management<br />
              Dec 2025 - Dec 2027
            </p>
            <div className="flex flex-wrap gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] md:text-xs text-foreground/80 mt-auto">
              {['Azure SQL', 'Business Intelligence (BI)', 'Data Engineering'].map(skill => (
                <span key={skill} className="bg-blue-900/30 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1">{skill}</span>
              ))}
            </div>
          </div>
          {/* Coursera */}
          <div className="card_bg p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl flex flex-col h-full">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2">Coursera</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mb-1.5 sm:mb-2">
              Diploma, Business Intelligence<br />
              Dec 2024 - Mar 2025 · Grade: A+
            </p>
            <ul className="list-disc ml-3 sm:ml-4 mb-2 sm:mb-3 text-[10px] sm:text-xs md:text-sm text-gray-300 space-y-0.5 sm:space-y-1 flex-grow">
              <li>Developed understanding of data models and data pipelines.</li>
              <li>Learned about stakeholder collaboration in BI cycle.</li>
              <li>Learned about frameworks used in business intelligence.</li>
            </ul>
            <div className="flex flex-wrap gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] md:text-xs text-foreground/80 mt-auto">
              {['Business Intelligence (BI)', 'BI Tools', 'BI Projects'].map(skill => (
                <span key={skill} className="bg-blue-900/30 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1">{skill}</span>
              ))}
            </div>
          </div>

          {/* Aspire Institute */}
          <div className="card_bg p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl flex flex-col h-full">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2">Aspire Institute</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mb-1.5 sm:mb-2">
              Aspire Leaders Program<br />
              Jul 2024 - Nov 2024
            </p>
            <ul className="list-disc ml-3 sm:ml-4 mb-2 sm:mb-3 text-[10px] sm:text-xs md:text-sm text-gray-300 space-y-0.5 sm:space-y-1 flex-grow">
              <li>Learned about Resume writing, Interviewing and Networking.</li>
              <li>Did the BigFive Quiz for identifying abilities and capabilities.</li>
              <li>Attended masterclass on Operational Research and Data Analytics.</li>
            </ul>
            <div className="flex flex-wrap gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] md:text-xs text-foreground/80 mt-auto">
              {['Leadership', 'Team Management', 'Data Analytics'].map(skill => (
                <span key={skill} className="bg-blue-900/30 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1">{skill}</span>
              ))}
            </div>
          </div>

          {/* Karachi University */}
          <div className="card_bg p-2.5 sm:p-3 md:p-4 lg:p-5 rounded-lg sm:rounded-xl flex flex-col h-full sm:col-span-2 lg:col-span-1">
            <h3 className="text-xs sm:text-sm md:text-base lg:text-lg font-bold mb-1 sm:mb-2">Karachi University</h3>
            <p className="text-gray-400 text-[10px] sm:text-xs md:text-sm mb-1.5 sm:mb-2">
              Bachelor&apos;s degree, Computer Science<br />
              Dec 2020 - Dec 2024 · Grade: B+
            </p>
            <div className="mb-1.5 sm:mb-2 text-[8px] sm:text-[10px] md:text-xs text-foreground/60">Brand Ambassador at DataScience Society</div>
            <ul className="list-disc ml-3 sm:ml-4 mb-2 sm:mb-3 text-[10px] sm:text-xs md:text-sm text-gray-300 space-y-0.5 sm:space-y-1 flex-grow">
              <li>Learned programming and computer science fundamentals.</li>
              <li>Learned about computer architecture and its working.</li>
              <li>Got hands on Linear Algebra and Machine Learning.</li>
            </ul>
            <div className="flex flex-wrap gap-0.5 sm:gap-1 text-[8px] sm:text-[10px] md:text-xs text-foreground/80 mt-auto">
              {['Problem Solving', 'Communication', 'Computer Science'].map(skill => (
                <span key={skill} className="bg-blue-900/30 rounded-full px-1.5 sm:px-2 py-0.5 sm:py-1">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <div className="flex justify-center items-center w-full py-3 sm:py-4 md:py-6">
        <div className="card_bg p-3 sm:p-4 md:p-6 flex items-center justify-center w-full max-w-sm sm:max-w-md lg:max-w-lg">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">Let&apos;s</h1>
            <h2 className="font-bold text-lg sm:text-xl md:text-2xl lg:text-3xl text-center">Work Together.</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
