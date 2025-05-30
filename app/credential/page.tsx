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
            <p className="text-gray-400">
            Hi! I&apos;m a data analyst with a strong foundation in computer science and hands-on experience through impactful internships. Certified in the fundamentals of SQL and Python, I specialize in uncovering insights through data analysis. Outside of internships, I&apos;ve won data analytics competitions and completed a variety of projects that highlight my ability to transform data into meaningful action. Recognized by a company founder for my contributions, I&apos;m driven by continuous learning and excited to keep growing in the ever-evolving world of data. 🚀
            </p>
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
              <div>
                <h3 className="text-2xl font-bold mb-2">
                Data Science Intern 
                </h3>
                <p className="text-gray-500 mb-2">
                  Prodigy Infotech | December 2023
                </p>
                <ul className="list-disc ml-6">
                  <li>
                  Cleaned and analyzed data using Excel; visualized insights with Power BI.
                  </li>
                  <li>
                  Queried the data to find intelligent answers to those questions.
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-12 card_bg px-4">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold mb-6">Education</h2>
            <div className="grid grid-cols-1 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  BSc. (Hons) in Computing Science
                </h3>
                <p className="text-gray-500 mb-2">
                  UBIT Department of Karachi University | 2020 –
                  2024
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2">
                Completed High school with a focus in Computer Science
                </h3>
                <p className="text-gray-500 mb-2">
                  Nasra College | 2018 – 2020
                </p>
              </div>
            </div>
          </div>
        </section>
      </div>
      <div className="grid sm:grid-cols-2 gap-8">
        {/* Credentials Section */}
        <section className="card_bg p-4">
          <div className="container mx-auto px-4">
            <div className=""></div>
            <div className="flex">
              <div>
                <h1 className="font-bold text-4xl">Let&apos;s </h1>
                <h2 className="font-bold text-4xl">Work Together.</h2>
              </div>
              <div></div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}