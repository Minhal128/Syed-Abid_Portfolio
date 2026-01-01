import { ArrowRight, ExternalLink } from "lucide-react";
import React from "react";
interface ProjectCard {
  imageUrl: string;
  title: string;
  description: string;
  link?: string | null;
  live?: string | null;
}
export default function ProjectCard({
  imageUrl,
  title,
  description,
  link = null,
  live = null,
}: ProjectCard) {
  return (
    <div className="card_bg p-3 sm:p-4 md:p-6 gap-3 sm:gap-4 md:gap-6 flex flex-col h-full">
      <div className="w-full aspect-video overflow-hidden rounded-lg sm:rounded-xl md:rounded-2xl flex-shrink-0 max-h-[150px] sm:max-h-[200px] md:max-h-[280px] flex items-center justify-center bg-black/20">
        <img
          src={imageUrl}
          alt="Project Image"
          className="w-full h-full object-contain"
        />
      </div>
      <div className="flex gap-2 sm:gap-4 md:gap-6 items-center">
        <h2 className="text-base sm:text-lg md:text-2xl font-bold">{title}</h2>
      </div>

      <p className="opacity-50 flex-grow text-xs sm:text-sm md:text-base leading-relaxed">{description}</p>

      <div className="flex gap-2 items-center flex-shrink-0">
        <div className="flex gap-2 sm:gap-4 md:gap-6 items-center py-1 sm:py-2">
          {link != null ? (
            <a
              href={link}
              className="flex items-center gap-1 sm:gap-2 text-green-600 hover:underline text-xs sm:text-sm md:text-base touch-manipulation"
            >
              Read Case Study <ArrowRight width={12} className="sm:w-4 sm:h-4" />
            </a>
          ) : (
            <span className="uppercase text-[8px] sm:text-[10px] md:text-xs bg-green-600 rounded-2xl sm:rounded-3xl py-0.5 sm:py-1 px-1.5 sm:px-2 text-background">
              Completed
            </span>
          )}
          {live != null ? (
            <a
              href={live}
              className="flex items-center gap-1 sm:gap-2 text-green-600 hover:underline text-xs sm:text-sm md:text-base touch-manipulation"
            >
              View Project <ExternalLink width={12} className="sm:w-4 sm:h-4" />
            </a>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
}
