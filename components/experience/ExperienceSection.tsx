"use client";

import React, { useState } from "react";
import PythonIcon from "@/components/icons/python";
import PowerBIIcon from "@/components/icons/powerbi";
import TableauIcon from "@/components/icons/tableau";
import SQLServerIcon from "@/components/icons/sqlserver";
import MySQLIcon from "@/components/icons/mysql";
import PandasIcon from "@/components/icons/pandas";
import PostgreSQLIcon from "@/components/icons/postgresql";

interface Experience {
  id: string;
  company: string;
  title: string;
  type: string;
  duration: string;
  location: string;
  contributions: string[];
  skills: React.ReactNode[];
  isCurrent?: boolean;
}

const experiences: Experience[] = [
  {
    id: "centegy",
    company: "Centegy Technologies",
    title: "Programmer | Business Intelligence",
    type: "Full Time",
    duration: "Mar 2025 - Present",
    location: "Karachi, Pakistan",
    isCurrent: true,
    contributions: [
      "Built PostgreSQL stored procedures to consolidate multi-source data, validate inputs, and automate distributor profitability processing, reducing manual effort and enhancing scalability.",
      "Partnered with executives, senior leadership, and QA teams to gather requirements, align reporting solutions with business goals, resolve errors, and demo new BI features, driving adoption and decision-making.",
    ],
    skills: [
      <PowerBIIcon key="powerbi" width={32} height={32} />,
      <PostgreSQLIcon key="postgres" width={32} height={32} />,
      <PythonIcon key="python" width={32} height={32} />,
    ],
  },
  {
    id: "morsebridge",
    company: "MorseBridge Ventures",
    title: "Data Analyst",
    type: "Freelance",
    duration: "Jun 2024 - Sep 2024",
    location: "United Arab Emirates · Remote",
    contributions: [
      "Scraped the Crunchbase website, Extracted the data of startups and stored them in an excel file.",
      "Performed EDA on that Data to extract insights.",
      "Visualized the extracted insights by using Power BI to create a compelling data story.",
    ],
    skills: [
      <PowerBIIcon key="powerbi" width={32} height={32} />,
      <PythonIcon key="python" width={32} height={32} />,
      <PandasIcon key="pandas" width={32} height={32} />,
    ],
  },
  {
    id: "puan",
    company: "Pakistan-U.S. Alumni Network",
    title: "Data Teaching Assistant",
    type: "Internship",
    duration: "May 2024 - Sep 2024",
    location: "University of Karachi · On-site",
    contributions: [
      "Volunteered and Participated in an IBM SPSS Workshop conducted by Dr. Adnan Butt.",
      "Assisted in research within the Domain of Sustainability named as Green Skills.",
      "Constructed a report on the findings of the research and learned about Academic writing.",
      "Learned about Research work and Data Collection from different platforms.",
    ],
    skills: [
      <PythonIcon key="python" width={32} height={32} />,
      <PowerBIIcon key="powerbi" width={32} height={32} />,
    ],
  },
  {
    id: "interncareer",
    company: "InternCareer",
    title: "SQL Developer Intern",
    type: "Internship",
    duration: "Jan 2024 - Apr 2024",
    location: "Manglore · Remote",
    contributions: [
      "Analyzed the Spotify dataset using SQL SERVER and extracted sagacious insights from it.",
      "Designed an ER Diagram by doing online research and selecting a scenario.",
      "Designed a physical schema and normalized it up till 3NF using normalization techniques.",
      "Wrote DML code using MYSQL including creating tables, inserting values, and writing functions.",
    ],
    skills: [
      <SQLServerIcon key="sql" width={32} height={32} />,
      <MySQLIcon key="mysql" width={32} height={32} />,
      <PostgreSQLIcon key="postgres" width={32} height={32} />,
    ],
  },
  {
    id: "prodigy",
    company: "Prodigy InfoTech",
    title: "Data Science Intern",
    type: "Internship",
    duration: "Dec 2023 - Jan 2024",
    location: "Mumbai, India · Remote",
    contributions: [
      "Gathered data from different platforms.",
      "Cleaned and organized data using tools like MS Excel to increase their veracity.",
      "Studied the cleaned data to make problem-focused questions out of it.",
      "Visualized the extracted insights using Power BI to make the dashboard interactive.",
    ],
    skills: [
      <PowerBIIcon key="powerbi" width={32} height={32} />,
      <PythonIcon key="python" width={32} height={32} />,
      <PandasIcon key="pandas" width={32} height={32} />,
    ],
  },
  {
    id: "kulturehire",
    company: "KultureHire",
    title: "Data Analyst Intern",
    type: "Internship",
    duration: "Jul 2023 - Nov 2023",
    location: "Puducherry, India · Remote",
    contributions: [
      "Made a Google Survey Form and collected data from it.",
      "Performed Analysis on the collected data using SQL and gained insights from it.",
      "Visualized the gained insights on Power BI dashboard keeping all factors in consideration.",
      "Presented the dashboard in front of stakeholders in a Live LinkedIn Presentation.",
    ],
    skills: [
      <PowerBIIcon key="powerbi" width={32} height={32} />,
      <SQLServerIcon key="sql" width={32} height={32} />,
      <PythonIcon key="python" width={32} height={32} />,
    ],
  },
  {
    id: "sparks",
    company: "The Sparks Foundation",
    title: "Data Science and Business Analytics Intern",
    type: "Internship",
    duration: "Jun 2023 - Jun 2023",
    location: "Singapore · Remote",
    contributions: [
      "Performed Exploratory Data Analysis on two different datasets.",
      "Extracted meaningful insights from the datasets.",
      "Visualized insights in different forms including Map, Bar Graph, Line graph, Pie chart etc.",
    ],
    skills: [
      <TableauIcon key="tableau" width={32} height={32} />,
      <PythonIcon key="python" width={32} height={32} />,
      <PandasIcon key="pandas" width={32} height={32} />,
    ],
  },
];

// Company logos/images mapping
const companyLogos: Record<string, string> = {
  centegy: "/logo/centegy.png",
  morsebridge: "/logo/morsebridge.png",
  puan: "/logo/uok.png",
  interncareer: "/logo/interncareer.png",
  prodigy: "/logo/prodigy.png",
  kulturehire: "/logo/kulturehire.png",
  sparks: "/logo/sparks.png",
};

export default function ExperienceSection() {
  const [selectedExp, setSelectedExp] = useState(experiences[0]);

  return (
    <section className="py-8 md:py-16 w-full">
      {/* Horizontal Tabs - Scrollable on mobile */}
      <div className="mb-4 md:mb-6 overflow-x-auto scrollbar-hide -mx-4 px-4 touch-manipulation">
        <div className="flex justify-start md:justify-center gap-0 min-w-max">
          {experiences.map((exp) => (
            <button
              key={exp.id}
              onClick={() => setSelectedExp(exp)}
              className={`px-3 md:px-4 py-2 text-[11px] md:text-sm font-medium transition-all duration-300 whitespace-nowrap flex-shrink-0 border-b-2 touch-manipulation min-h-[44px] flex items-center ${selectedExp.id === exp.id
                ? "text-white border-cyan-400 bg-[#0a1628]"
                : "text-gray-400 hover:text-gray-200 border-transparent"
                }`}
            >
              {exp.company}
              {exp.isCurrent && <span className="text-cyan-400 ml-1">*</span>}
            </button>
          ))}
        </div>
      </div>

      {/* Main Content Card */}
      <div className="card_bg rounded-xl overflow-hidden">
        <div className="p-6 md:p-12">

          {/* Job Title */}
          <div className="text-center mb-4 md:mb-6">
            <h3 className="text-lg md:text-2xl font-bold text-white mb-1">
              {selectedExp.title}
            </h3>
            <p className="text-gray-400 text-xs md:text-sm mb-2">({selectedExp.type})</p>
            <p className="text-cyan-400 italic text-xs md:text-sm mb-1">
              {selectedExp.duration}
            </p>
            <p className="text-gray-400 text-xs md:text-sm">
              {selectedExp.location}
            </p>
          </div>

          {/* Description/Contributions as paragraph */}
          <div className="mb-6 md:mb-8 text-center max-w-2xl mx-auto">
            <p className="text-gray-300 leading-relaxed text-sm md:text-base">
              {selectedExp.contributions.join(" ")}
            </p>
          </div>

          {/* Skills as badges */}
          <div className="flex justify-center gap-2 md:gap-3 flex-wrap">
            {selectedExp.contributions.length > 0 && (
              <>
                {getSkillBadges(selectedExp.id).map((skill, index) => (
                  <span
                    key={index}
                    className="px-3 md:px-4 py-1.5 md:py-2 bg-cyan-500/20 border border-cyan-500/50 text-cyan-300 rounded-full text-xs md:text-sm font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

// Helper function to get skill badges based on experience
function getSkillBadges(expId: string): string[] {
  const skillsMap: Record<string, string[]> = {
    centegy: ["Microsoft Power BI", "Power BI Report Builder", "PostgreSQL", "Collaborative Problem Solving", "Business Intelligence (BI)", "Business Intelligence Tools"],
    morsebridge: ["Web Scraping", "EDA", "Power BI", "Python"],
    puan: ["IBM SPSS", "Research", "Academic Writing", "Data Collection"],
    interncareer: ["SQL Server", "MySQL", "ER Diagrams", "Database Design"],
    prodigy: ["MS Excel", "Power BI", "Data Cleaning", "Visualization"],
    kulturehire: ["SQL", "Power BI", "Google Forms", "Stakeholder Presentation"],
    sparks: ["Tableau", "EDA", "Python", "Data Visualization"],
  };
  return skillsMap[expId] || [];
}
