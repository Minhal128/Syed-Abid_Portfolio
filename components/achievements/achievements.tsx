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
    title: "AWS Certified Solutions Architect",
    description: "Professional certification for designing distributed systems on AWS",
    date: "2023",
    issuer: "Amazon Web Services",
    image: "/certificates/aws-cert.png"
  },
  {
    title: "Google Cloud Professional Developer",
    description: "Expertise in building scalable and reliable applications using Google Cloud",
    date: "2023",
    issuer: "Google Cloud",
    image: "/certificates/gcp-cert.png"
  },
  // Add more certifications as needed
];

const keyAchievements: Achievement[] = [
  {
    title: "Led Development of Enterprise Platform",
    description: "Successfully led a team of 10 developers in building a scalable enterprise platform serving 100k+ users",
    date: "2023",
    image: "/achievements/enterprise-platform.png"
  },
  {
    title: "Open Source Contribution",
    description: "Contributed to major open-source projects with 1000+ stars on GitHub",
    date: "2023",
    image: "/achievements/open-source.png"
  },
  // Add more achievements as needed
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
    <div className="container mx-auto py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-center space-x-4 mb-8">
          <button
            onClick={() => setActiveTab("certifications")}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
              activeTab === "certifications"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10"
            }`}
          >
            <Award className="w-5 h-5" />
            <span>Certifications</span>
          </button>
          <button
            onClick={() => setActiveTab("achievements")}
            className={`flex items-center space-x-2 px-6 py-3 rounded-full transition-all ${
              activeTab === "achievements"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10"
            }`}
          >
            <Trophy className="w-5 h-5" />
            <span>Key Achievements</span>
          </button>
        </div>

        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="space-y-8"
        >
          {/* Carousel Section */}
          <div className="mb-8">
            <CertificateCarousel
              images={activeTab === "certifications" ? certificateImages : achievementImages}
            />
          </div>

          {/* Cards Section */}
          {activeTab === "certifications" ? (
            <div className="grid gap-6">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                  <p className="text-muted-foreground mb-2">{cert.description}</p>
                  <div className="flex justify-between items-center text-sm text-muted-foreground">
                    <span>{cert.issuer}</span>
                    <span>{cert.date}</span>
                  </div>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="grid gap-6">
              {keyAchievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
                >
                  <h3 className="text-xl font-semibold mb-2">{achievement.title}</h3>
                  <p className="text-muted-foreground mb-2">{achievement.description}</p>
                  <div className="text-sm text-muted-foreground text-right">
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