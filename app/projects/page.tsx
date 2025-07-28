
"use client";
import ProjectCard from "@/components/project_card/card";
import React, { useState } from "react";
import { Ripple } from "@/components/magicui/ripple";
import { Badge } from "@/components/ui/badge";
import CertificateCarousel from "@/components/achievements/certificate-carousel";
import { X } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Cricket Insights 20",
    description:
      "Full stack project: Web scraped Cricinfo, analyzed top 12 players, pre-processed with pandas, transformed to CSV, visualized in Power BI.",
    imageUrl: "/cricket.jpg",
    details: {
      overviewImages: [
        "/cricketproject1.jpg",
        "/cricketproject2.jpg",
        "/cricketproject3.jpg",
      ],
      fullDescription: `In this full stack project, I:\n- Collected the data from \"Cricinfo\" website by using the web scraping techniques.\n- Analyzed the key metrics for Top 12 players.\n- Pre-processed that data through pandas library.\n- Transformed that data into csv files.\n- Loaded the data in Power BI and then transformed it accordingly.\n- Designed the dashboard layout and selected appropriate charts for visualizations.`,
      skills: ["Microsoft Excel", "Microsoft Power BI", "Python", "pandas"],
    },
  },
  {
    id: 2,
    title: "Health Metrics",
    description:
      "Kaggle fitness tracker data: Identified KPIs, built Power BI dashboard, used Key Influencer visual for metric analysis.",
    imageUrl: "/health.jpg",
    details: {
      overviewImages: ["/healthproject1.jpg", "/healthproject2.jpg"],
      fullDescription: `Note: The data used in this project is from Kaggle. This is data is basically from a fitness tracker device and contains info about 999 users physical activity.\n\nIn this project, I :\n- Identified KPIs from the dataset to build a solid understanding of the data.\n- Used Power BI to prepare an effective and appealing dashboard that can clearly display the KPIs.\n- Studied and used a new visual in this dashboard named as \"Key Influencer\" to effectively analyze the metrics and display the top factors influencing that metric.`,
      skills: ["Data Analysis", "Microsoft Power BI Data Visualization", "Power Query", "KPI Metric Development"],
    },
  },
  {
    id: 3,
    title: "InsightKart: Amazon Analytics",
    description:
      "E-commerce analytics: Used Kaggle sales data, transformed with Power Query, built KPIs with DAX, designed and implemented interactive Power BI dashboards.",
    imageUrl: "/insightKart.jpg",
    details: {
      overviewImages: ["/insightKartpage1.jpg", "/insightKartpage2.jpg"],
      fullDescription: `In this project, I :\n- Used a cleaned e-commerce sales dataset which was obtained from Kaggle in order to save time from data collection.\n- Did some required data transformations using Power Query to align the data with the requirement.\n- Studied the data and identified the KPIs that are required and later configured those KPIs using DAX in Power BI.\n- Analyzed the data to extract insight which were further showcased using charts and visuals.\n- Prepared a mock dashboard to finalize the layout design of dashboards.\n- Implemented the mock design in Power BI and added the necessary functionalities like buttons, slicers etc to make the dashboard interactive.`,
      skills: [
        "Data Visualization",
        "Data Analysis",
        "Data Cleaning",
        "Microsoft Power BI",
        "KPI Dashboards"
      ],
    },
  },
];

function ProjectDetailsModal({ project, onClose }: { project: typeof projects[0]; onClose: () => void }) {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm px-2" onClick={onClose}>
      <div
        className="relative w-full max-w-4xl mx-auto bg-background dark:bg-[#18181b] rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden border border-border"
        onClick={e => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          className="absolute top-4 right-4 z-20 p-2 rounded-full bg-background/80 hover:bg-background/90 transition-colors border border-border"
          onClick={onClose}
          aria-label="Close"
        >
          <X className="w-6 h-6 text-foreground" />
        </button>
        {/* Left: Details */}
        <div className="flex-1 min-w-0 p-8 flex flex-col gap-6 justify-center dark:bg-background/90">
          <h2 className="text-3xl font-bold mb-2 text-foreground">{project.title}</h2>
          <div className="prose prose-invert text-muted-foreground whitespace-pre-line mb-4 text-base">
            {project.details.fullDescription}
          </div>
          <div className="flex flex-wrap gap-2 mt-2">
            {project.details.skills.map(skill => (
              <Badge key={skill} variant="secondary">{skill}</Badge>
            ))}
          </div>
        </div>
        {/* Right: Visuals */}
        <div className="flex-1 min-w-0 p-8 flex items-center justify-center bg-background/80 dark:bg-[#232326] border-l border-border">
          {project.details.overviewImages.length > 1 ? (
            <div className="w-full max-w-[700px] max-h-[500px]">
              <CertificateCarousel
                images={project.details.overviewImages.map((src, i) => ({
                  src,
                  alt: `${project.title} visual ${i + 1}`,
                  title: project.title,
                }))}
              />
            </div>
          ) : (
            <img
              src={project.details.overviewImages[0]}
              alt={project.title}
              className="rounded-xl shadow-lg w-full max-w-[700px] max-h-[500px] object-contain"
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default function ProjectsPage() {
  const [openProject, setOpenProject] = useState<null | typeof projects[0]>(null);

  return (
    <div className="relative min-h-screen flex flex-col items-center justify-center bg-background dark:bg-background/95 overflow-hidden">
      {/* Removed AnimatedGridPattern background */}
      <div className="relative z-10 w-full max-w-5xl px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-foreground">Projects</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {projects.map((project) => (
            <div
              key={project.id}
              className="relative group cursor-pointer transition-transform hover:scale-[1.03] active:scale-95"
              onClick={() => setOpenProject(project)}
            >
              <Ripple className="z-0" />
              <ProjectCard
                imageUrl={project.imageUrl}
                title={project.title}
                description={project.description}
              />
            </div>
          ))}
        </div>
      </div>
      {openProject && (
        <ProjectDetailsModal project={openProject} onClose={() => setOpenProject(null)} />
      )}
    </div>
  );
}
