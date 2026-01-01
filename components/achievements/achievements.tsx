"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Trophy, Award } from "lucide-react";
import CertificateCarousel from "./certificate-carousel";

interface Achievement {
  title: string;
  description: string;
  date: string;
  issuer?: string;
  image?: string;
}

const certifications: Achievement[] = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified AI Foundations Associate",
    description: "Validates foundational knowledge of Oracle Cloud Infrastructure (OCI) and AI concepts, including core cloud services, AI fundamentals, and how AI is applied within Oracle’s cloud ecosystem.",
    date: "2025",
    issuer: "Oracle",
    image: "/oracle.jpeg"
  },
  {
    title: "SQL (Basic)",
    description: "Demonstrates foundational skills in SQL, including basic queries, filtering, sorting, and joins.",
    date: "2023",
    issuer: "HackerRank",
    image: "/7.jpg"
  },
  {
    title: "Python (Basic)",
    description: "Validates understanding of Python fundamentals such as data types, conditionals, loops, and basic functions.",
    date: "2023",
    issuer: "HackerRank",
    image: "/8.jpg"
  },
  {
    title: "Forage - Power BI Job Simulation",
    description: "A virtual experience simulating real-world Power BI tasks, including data cleaning, visualization, and dashboard creation for business insights.",
    date: "2023",
    issuer: "Forage",
    image: "/9.jpg"
  },
  {
    title: "Aspire Leaders Program",
    description: "A leadership development initiative offering training in personal growth, critical thinking, and global networking for emerging leaders.",
    date: "2023",
    issuer: "Aspire Institute",
    image: "/10.jpg"
  },
  {
    title: "Google Business Intelligence Certification",
    description: "Covers core BI skills including data modeling, dashboard creation, and performance analysis using tools like SQL, Looker, and Tableau.",
    date: "2023",
    issuer: "Google",
    image: "/11.jpg"
  },
  {
    title: "Google Soft Skills Program",
    description: "Focuses on developing essential workplace skills such as communication, collaboration, adaptability, and problem-solving.",
    date: "2023",
    issuer: "Google",
    image: "/12.jpg"
  },
  {
    title: "SQL (Intermediate)",
    description: "Highlights proficiency in more advanced SQL concepts like subqueries, window functions, CTEs, and data aggregation.",
    date: "2023",
    issuer: "HackerRank",
    image: "/13.jpg"
  }
];

const keyAchievements: Achievement[] = [
  {
    title: "Top New Launch",
    description: "recognition as a Top New Launch on Topmate, showcasing strong initial impact, credibility, and positive engagement for newly launched offerings on the platform.",
    date: "November 2025",
    issuer: "Topmate",
    image: "/keyA.jpeg"
  },
  {
    title: "Certificate of Appreciation",
    description: "In recognition of my invaluable contribution as an instructor for the Power BI 101 Course.",
    date: "Dec 2025",
    issuer: "Aspire Institute",
    image: "/key.jpeg"
  },
  {
    title: "ASME Quest Chapter Resume Competition Winner",
    description: "Won a Resume Competition organized by ASME Quest Chapter after competing against 40 individuals",
    date: "2023",
    image: "/2.jpg"
  },
  {
    title: "National Internship Program Certificate of Appreciation",
    description: "Received a certificate of appreciation after completing internship at National Internship Program, organized by Pakistan - U.S Alumni Network",
    date: "2023",
    image: "/3.jpg"
  },
  {
    title: "Best Brand Ambassador - FAST Data Science Society",
    description: "Won the 'Best Brand Ambassador' award as a Brand Ambassador of FAST Data Science Society",
    date: "2023",
    image: "/1.jpg"
  },
  {
    title: "DataQuest Data Visualization Competition - 3rd Prize",
    description: "Won 3rd Prize at a Data Visualization Competition named 'DataQuest' while participating as a Solo Competitor",
    date: "2023",
    image: "/5.jpg"
  },
  {
    title: "The Talent Games - Badge of Distinction",
    description: "Won a 'Badge of Distinction' from The Talent Games after getting ranked in the Top 10th Percentile Globally",
    date: "2023",
    image: "/4.jpg"
  },
  {
    title: "Aga Khan Board Bridge Scholarship",
    description: "Received a national level scholarship from Aga Khan Board named as 'Bridge Scholarship' which covered the whole expenses of intermediate education",
    date: "2023",
    image: "/6.jpg"
  }
];

export default function Achievements() {
  const [activeTab, setActiveTab] = useState<"certifications" | "achievements">("certifications");

  const certificateImages = certifications
    .filter(cert => cert.image)
    .map(cert => ({
      src: cert.image!,
      alt: cert.title,
      title: cert.title
    }));

  const achievementImages = keyAchievements
    .filter(achievement => achievement.image)
    .map(achievement => ({
      src: achievement.image!,
      alt: achievement.title,
      title: achievement.title
    }));

  return (
    <div className="container mx-auto py-4 sm:py-6 md:py-8 lg:py-12 px-2 sm:px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-1 sm:space-x-2 md:space-x-4 mb-4 sm:mb-6 md:mb-8">
          <button
            onClick={() => setActiveTab("certifications")}
            className={`flex items-center space-x-1 md:space-x-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base touch-manipulation ${activeTab === "certifications"
              ? "bg-primary text-primary-foreground"
              : "hover:bg-primary/10"
              }`}
          >
            <Award className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span>Certifications</span>
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`flex items-center space-x-1 md:space-x-2 px-3 sm:px-4 md:px-6 py-1.5 sm:py-2 md:py-3 rounded-full transition-all text-xs sm:text-sm md:text-base touch-manipulation ${activeTab === "achievements"
              ? "bg-primary text-primary-foreground"
              : "hover:bg-primary/10"
              }`}
          >
            <Trophy className="w-3 h-3 sm:w-4 sm:h-4 md:w-5 md:h-5" />
            <span>Key Achievements</span>
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-4 sm:space-y-6 md:space-y-8"
        >
          {/* Carousel Section */}
          <div className="mb-4 sm:mb-6 md:mb-8">
            <CertificateCarousel
              images={activeTab === "certifications" ? certificateImages : achievementImages}
            />
          </div>

          {/* Cards Section */}
          {activeTab === "certifications" ? (
            <div className="grid gap-3 sm:gap-4 md:gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base">{cert.description}</p>
                  <div className="flex justify-between items-center text-[10px] sm:text-xs md:text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid gap-3 sm:gap-4 md:gap-6">
              {keyAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-lg sm:rounded-xl p-3 sm:p-4 md:p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-sm sm:text-lg md:text-xl font-semibold mb-1.5 sm:mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground mb-1.5 sm:mb-2 text-xs sm:text-sm md:text-base">{achievement.description}</p>
                  <div className="text-[10px] sm:text-xs md:text-sm text-muted-foreground text-right">
                    {achievement.date}
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </motion.div>
      </div>
    </div>
  );
} 