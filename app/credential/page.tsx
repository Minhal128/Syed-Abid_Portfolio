import React from "react";
import Image from "next/image";
// import { ScrollProgress } from "@/components/magicui/scroll-progress";
// import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
// import { ChevronRight, ArrowUpRight, Github, ExternalLink } from "lucide-react";
import { Instagram } from "lucide-react";
import HtmlIcon from "@/components/icons/html";
import CssIcon from "@/components/icons/css";
import LinkedInIcon from "@/components/icons/linkedIn";
// import BehenceIcon from "@/components/icons/behence";
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

const width = 40;
const height = 40;

export default function Page() {
  const contactData = [
    // {
    //   icons: <BehenceIcon width={28} height={28} />,
    //   name: "Behance",
    //   url: "https://www.behance.net/suryamankedem",
    // },
    {
      icons: <Instagram />,
      name: "Instagram",
      url: "https://www.instagram.com/syedabid3527/",
    },
    // {
    //   icons: <Dribbble />,
    //   name: "Dribbble",
    //   url: "https://www.dribbble.com/suryamankedem",
    // },
    {
      icons: <LinkedInIcon width={28} height={28} />,
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/syed-abid-hassan-bb569b1b8",
    },
  ];
  return (
    <div className="grid gap-10">
      <div className="grid sm:grid-cols-3 gap-10">
        {/* Left Section */}
        <div className="card_bg p-10 max-h-fit">
          <div className="flex items-center justify-center">
            <Image src="/_DSC8303.png" alt="profile" width={250} height={100} />
          </div>
          <div className="grid gap-2 text-center">
            <h1 className="text-3xl font-bold">Syed Abid Hassan</h1>
            <p>
              <a href="mailto:abidhassanjaffri31@gmail.com" className="opacity-50">
                @abidhassanjaffri31
              </a>
            </p>
            <p className="flex gap-4 items-center justify-center">
              {contactData.map((contact, index) => (
                <a href={contact.url} key={index} className="card_bg p-1">
                  {contact.icons}
                </a>
              ))}
            </p>

            <Button className="cursor-pointer z-50">
              <a href="mailto:abidhassanjafri31@gmail.com">Contact Me</a>
            </Button>
          </div>
          {/* <BorderBeam duration={8} size={100} /> */}
        </div>

        {/* Right Section */}
        <div className="grid sm:col-span-2 gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">About Me</h2>
            <div className="text-gray-400">
              <p className="mb-4">
                I am a Computer Science graduate with a solid interest and passion in Data Analytics &amp; Business Intelligence. Keeping this passion and interest as my top most priority, I have/am :
              </p>
              <ul className="list-none space-y-2">
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>Currently working as a <strong>𝐉𝐮𝐧𝐢𝐨𝐫 𝐁𝐈 𝐏𝐫𝐨𝐠𝐫𝐚𝐦𝐦𝐞𝐫</strong> at <strong>𝐂𝐞𝐧𝐭𝐞𝐠𝐲 𝐓𝐞𝐜𝐡𝐧𝐨𝐥𝐨𝐠𝐢𝐞𝐬</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>an <strong>𝐈𝐓 𝐃𝐨𝐦𝐚𝐢𝐧 𝐋𝐞𝐚𝐝𝐞𝐫 𝐟𝐨𝐫 𝐏𝐚𝐤𝐢𝐬𝐭𝐚𝐧</strong> at <strong>𝐀𝐬𝐩𝐢𝐫𝐞 𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>been within the <strong>𝐓𝐨𝐩 50 Teams</strong> in <em>𝑼𝒏𝒊𝒍𝒆𝒗𝒆𝒓 𝑻𝒂𝒍𝒆𝒏𝒕 𝑯𝒖𝒏𝒕 &apos;25</em>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>won a <strong>𝐑𝐞𝐬𝐮𝐦𝐞 𝐂𝐨𝐦𝐩𝐞𝐭𝐢𝐭𝐢𝐨𝐧</strong>, organized by <strong>𝐀𝐒𝐌𝐄 𝐐𝐔𝐄𝐒𝐓 𝐂𝐡𝐚𝐩𝐭𝐞𝐫</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>A <strong>𝐆𝐨𝐨𝐠𝐥𝐞 certified 𝐁𝐮𝐬𝐢𝐧𝐞𝐬𝐬 𝐈𝐧𝐭𝐞𝐥𝐥𝐢𝐠𝐞𝐧𝐜𝐞 𝐏𝐫𝐨𝐟𝐞𝐬𝐬𝐢𝐨𝐧𝐚𝐥</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>Worked on multiple internships, analyzed data, created dashboards, and presented insights using tools like <strong>𝐏𝐨𝐰𝐞𝐫 𝐁𝐈</strong>, <strong>𝐒𝐐𝐋</strong>, <strong>𝐚𝐧𝐝 𝐄𝐱𝐜𝐞𝐥</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>Earned certifications in <strong>𝐒𝐐𝐋 (𝐁𝐚𝐬𝐢𝐜 &amp; 𝐈𝐧𝐭𝐞𝐫𝐦𝐞𝐝𝐢𝐚𝐭𝐞)</strong>, <strong>𝐏𝐲𝐭𝐡𝐨𝐧 (𝐁𝐚𝐬𝐢𝐜)</strong>, and <strong>𝐏𝐨𝐰𝐞𝐫 𝐁𝐈</strong> through a <strong>𝐏𝐰𝐂 𝐒𝐰𝐢𝐭𝐳𝐞𝐫𝐥𝐚𝐧𝐝 𝐬𝐢𝐦𝐮𝐥𝐚𝐭𝐢𝐨𝐧</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>Working as a Brand Ambassador, winning the <strong>𝐁𝐞𝐬𝐭 𝐁𝐫𝐚𝐧𝐝 𝐀𝐦𝐛𝐚𝐬𝐬𝐚𝐝𝐨𝐫</strong> award and contributing to event promotions.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>Got multiple awards in my name. The recent one is a <strong>𝐁𝐚𝐝𝐠𝐞 𝐨𝐟 𝐃𝐢𝐬𝐭𝐢𝐧𝐜𝐭𝐢𝐨𝐧 2024</strong> from <strong>𝐓𝐡𝐞 𝐓𝐚𝐥𝐞𝐧𝐭 𝐆𝐚𝐦𝐞𝐬</strong>.</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-2">➡</span>
                  <span>An active member of the <strong>𝐏𝐚𝐤𝐢𝐬𝐭𝐚𝐧-𝐔.𝐒. 𝐀𝐥𝐮𝐦𝐧𝐢 𝐍𝐞𝐭𝐰𝐨𝐫𝐤</strong>, <strong>𝐀𝐬𝐩𝐢𝐫𝐞 𝐈𝐧𝐬𝐭𝐢𝐭𝐮𝐭𝐞</strong>, and <strong>𝐘𝐨𝐮𝐭𝐡 𝐏𝐚𝐫𝐥𝐢𝐚𝐦𝐞𝐧𝐭 𝐏𝐚𝐤𝐢𝐬𝐭𝐚𝐧</strong> supporting learning and development initiatives.</span>
                </li>
              </ul>
            </div>
          </div>

          {/* Skills Section */}
          <section className="py-12">
            <div className="container mx-auto px-4">
              <h2 className="text-3xl font-bold mb-6">Skills</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Programming Languages
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex bg-blue-600/5 rounded-3xl p-2 gap-4 justify-around">
                      <PythonIcon width={width} height={height} />
                    </div>
                    <div className="flex rounded-3xl p-2 gap-4 justify-around">
                      <HtmlIcon width={width} height={height} />
                      <CssIcon width={width} height={height} />
                    </div>
                  </div>
                  <BorderBeam duration={6} size={100} />
                </div>
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-4">
                    Visualization Tools & Libraries
                  </h3>
                  <div className="flex flex-col gap-4">
                    <div className="flex bg-green-600/5 rounded-3xl p-2 gap-4 justify-around">
                      <PowerBIIcon width={width} height={height} />
                      <TableauIcon width={width} height={height} />
                      <LookerStudioIcon width={width} height={height} />
                    </div>
                    <div className="flex rounded-3xl p-2 gap-4 justify-around">
                      <PandasIcon width={width} height={height} />
                      <MatplotlibIcon width={width} height={height} />
                    </div>
                  </div>
                  <BorderBeam duration={5} size={100} />
                </div>
                <div className="card_bg p-6">
                  <h3 className="text-xl font-semibold mb-2">
                    Database & Backend
                  </h3>
                  <div className="flex bg-green-600/5 rounded-3xl p-2 gap-4 justify-around">
                    <PostgreSQLIcon width={width} height={height} />
                    <SQLServerIcon width={width} height={height} />
                  </div>
                  <div className="flex rounded-3xl p-2 gap-4 justify-around">
                    <MongoDBIcon width={width} height={height} />
                    <MySQLIcon width={width} height={height} />
                  </div>
                  <BorderBeam duration={4} size={100} />
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {/* Experience Section */}
        <section className="py-12 card_bg px-4 ">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Experience</h2>
            <div className="grid grid-cols-1 gap-8">
              {/* 1. Junior Programmer | Business Intelligence */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Junior Programmer | Business Intelligence</h3>
                <p className="text-gray-500 mb-2">Centegy Technologies · Full-time<br/>Dec 2024 - Present · Karachi, Sindh, Pakistan · On-site</p>
                <ul className="list-disc ml-6 mb-2">
                  <li>During this role, I :</li>
                  {/* Add more details as you gain experience */}
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Power BI Report Builder','Client Services','Client Relations','Microsoft Power BI','Paginated Report','Business Intelligence (BI)','Business Intelligence Projects','Data Reporting','Dashboard Building','Business Intelligence Tools','PL/SQL'].map(skill => <span key={skill} className="bg-green-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
              {/* 2. Data Analyst */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Data Analyst</h3>
                <p className="text-gray-500 mb-2">MorseBridge Ventures · Freelance<br/>Jun 2024 - Sep 2024 · 4 months · United Arab Emirates · Remote</p>
                <ul className="list-disc ml-6 mb-2">
                  <li>Scraped the Crunchbase website, Extracted the data of startups and stored them in an excel file.</li>
                  <li>Performed EDA on that Data to extract insights.</li>
                  <li>Visualized the extracted insights by using Power BI to create a compelling data story.</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Statistical Modeling','Data Collection','Customer Insight','Microsoft Power BI','Data Cleaning','KPI Dashboards','Data Analytics','Data Visualization','SQL','DAX','Data Modeling','Financial Data Analytics'].map(skill => <span key={skill} className="bg-green-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
              {/* 3. Data Teaching Assistant */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Data Teaching Assistant</h3>
                <p className="text-gray-500 mb-2">Pakistan-U.S. Alumni Network · Internship<br/>May 2024 - Sep 2024 · 5 months · University of Karachi · On-site</p>
                <ul className="list-disc ml-6 mb-2">
                  <li>Volunteered and Participated in an IBM SPSS Workshop which was conducted by Dr. Adnan Butt and hosted by Dr, Samina Qureshi.</li>
                  <li>Assisted in a research within the Domain of Sustainability named as Green Skills. Propose of this research was to know about the skills which are required in the transition of Green Workforce.</li>
                  <li>Constructed a report on the findings of the research and learned about Academic writing.</li>
                  <li>Learned about Research work and Data Collection as I collected data from different platforms for creating the report.</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Statistical Modeling','Data Collection','Customer Insight','Sustainability','KPI Dashboards','Data Analysis','IBM SPSS','Report Writing','green skills','Research Skills','DAX','Green Infrastructure'].map(skill => <span key={skill} className="bg-green-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
              {/* 4. SQL Developer Intern */}
              <div>
                <h3 className="text-2xl font-bold mb-2">SQL Developer Intern</h3>
                <p className="text-gray-500 mb-2">InternCareer · Internship<br/>Jan 2024 - Apr 2024 · 4 months · Manglore · Remote</p>
                <ul className="list-disc ml-6 mb-2">
                  <li>Analyzed the Spotify dataset using SQL SERVER and extracted sagacious insights from it.</li>
                  <li>Selected a scenario by doing online research and then designed an ER Diagram of that scenario.</li>
                  <li>Designed a physical schema using that ER Diagram and normalized that schema up till 3NF using normalization techniques.</li>
                  <li>Wrote DML code using MYSQL in which I created tables, inserted values, updated them, deleted some of them and wrote functions to perform some specific tasks.</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Databases','Database Design','SQL','Microsoft SQL Server','Data Modeling','Relational Databases'].map(skill => <span key={skill} className="bg-green-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
              {/* 5. Data Science Intern */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Data Science Intern</h3>
                <p className="text-gray-500 mb-2">Prodigy InfoTech · Internship<br/>Dec 2023 - Jan 2024 · 2 months · Mumbai, Maharashtra, India · Remote</p>
                <ul className="list-disc ml-6 mb-2">
                  <li>Gathered data from different platforms.</li>
                  <li>Cleaned and organized using tools like MS Excel to increase their veracity.</li>
                  <li>Studied the cleaned data to make problem-focused questions out of it.</li>
                  <li>Queried the data to find intelligent answers to those questions.</li>
                  <li>Visualized the extracted insights using the right tools like Power BI to make the dashboard interactive.</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Exploratory Data Analysis','Presentation','Microsoft Excel','Data Science','Customer Insight','Presentation Skills','Microsoft Power BI','KPI Dashboards','Data Analysis','Data Visualization','Dashboard Building','SQL'].map(skill => <span key={skill} className="bg-green-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
              {/* 6. Data Analyst Intern */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Data Analyst Intern</h3>
                <p className="text-gray-500 mb-2">KultureHire · Internship<br/>Jul 2023 - Nov 2023 · 5 months · Puducherry, India · Remote</p>
                <ul className="list-disc ml-6 mb-2">
                  <li>Made a Google Survey Form and collected data from it.</li>
                  <li>Making business questions from the data.</li>
                  <li>Revised and Learned new concepts of Advanced Excel, SQL and Power BI</li>
                  <li>Performed Analysis on the collected data using SQL and gained insights from it.</li>
                  <li>Visualized the gained insights on the dashboard using Power BI by keeping all the factors in consideration.</li>
                  <li>Presented the dashboard in front of the stakeholders in a Live LinkedIn Presentation.(It is present on my profile)</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Excel Dashboards','Presentation','Microsoft Excel','Analytical Skills','Communication Skills','Business Analytics','Customer Insight','Presentation Skills','Microsoft Power BI','KPI Dashboards','Data Analysis','Problem Solving','Data Visualization','Dashboard Building','SQL','Data Modeling'].map(skill => <span key={skill} className="bg-green-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
              {/* 7. Data Science and Business Analytics Intern */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Data Science and Business Analytics Intern</h3>
                <p className="text-gray-500 mb-2">The Sparks Foundation · Internship<br/>Jun 2023 - Jun 2023 · 1 month · Singapore, Singapore · Remote</p>
                <ul className="list-disc ml-6 mb-2">
                  <li>Exploratory Data Analysis on two different datasets.</li>
                  <li>Extracted meaningful insights from the datasets.</li>
                  <li>Visualized those insights in different forms of visualization including Map, Bar Graph, Line graph, Curve, Pie chart etc.</li>
                </ul>
                <div className="mb-2 text-sm text-foreground/70">Learnings:</div>
                <ul className="list-disc ml-6 mb-2">
                  <li>Got to know more about Data Cleaning by cleaning two totally different datasets.</li>
                  <li>Got a good grip on EDA.</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Analytical Skills','Business Analysis','Communication Skills','Business Analytics','Customer Insight','KPI Dashboards','Data Analysis','Tableau','SQL'].map(skill => <span key={skill} className="bg-green-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 card_bg px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="grid grid-cols-1 gap-8">
              {/* 1. Coursera */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Coursera</h3>
                <p className="text-gray-500 mb-2">Diploma, Business Intelligence<br/>Dec 2024 - Mar 2025 · Grade: A+</p>
                <ul className="list-disc ml-6 mb-2">
                  <li>Developed understanding of what data models and data pipelines are and how they work.</li>
                  <li>Learned about the importance of stakeholder collaboration in the whole business intelligence cycle.</li>
                  <li>Learned about different frameworks which are used in business intelligence.</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Business Intelligence (BI)','Business Intelligence Tools','Business Intelligence Projects'].map(skill => <span key={skill} className="bg-blue-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
              {/* 2. Aspire Institute */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Aspire Institute</h3>
                <p className="text-gray-500 mb-2">Aspire Leaders Program<br/>Jul 2024 - Nov 2024</p>
                <ul className="list-disc ml-6 mb-2">
                  <li>Learned about Resume writing, Interviewing and Networking.</li>
                  <li>Had an introduction session with my ALP fellows.</li>
                  <li>Did the BigFive Quiz which helped in identifying more of my abilities and capabilities.</li>
                  <li>Attended a masterclass on Operational Research and Real World Applications of Data Analytics which was conducted by Dr. Manish Bansal.</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Leadership','Team Leadership','Team Management','Operations Research','Data Analytics'].map(skill => <span key={skill} className="bg-blue-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
              {/* 3. Karachi University */}
              <div>
                <h3 className="text-2xl font-bold mb-2">Karachi University</h3>
                <p className="text-gray-500 mb-2">Bachelor&apos;s degree, Computer Science<br/>Dec 2020 - Dec 2024 · Grade: B+</p>
                <div className="mb-2 text-sm text-foreground/70">Activities and societies: Brand Ambassador at DataScience Society</div>
                <ul className="list-disc ml-6 mb-2">
                  <li>Learned the programming and computer science fundamentals.</li>
                  <li>Learned about the computer architecture, it&apos;s components and it&apos;s working.</li>
                  <li>Learned about the basic and advanced concepts of the database.</li>
                  <li>Got my hands on Linear Algebra and Machine Learning which has been a great combo.</li>
                </ul>
                <div className="flex flex-wrap gap-2 text-xs text-foreground/80">
                  {['Problem Solving','Communication Skills','Computer Science'].map(skill => <span key={skill} className="bg-blue-900/30 rounded-full px-2 py-1">{skill}</span>)}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="flex justify-center items-center w-full my-8">
        <section className="card_bg p-4 flex items-center justify-center min-h-[180px] w-full max-w-xl">
          <div className="flex flex-col items-center justify-center w-full">
            <h1 className="font-bold text-4xl text-center">Let&apos;s </h1>
            <h2 className="font-bold text-4xl text-center">Work Together.</h2>
          </div>
        </section>
      </div>
    </div>
  );
}