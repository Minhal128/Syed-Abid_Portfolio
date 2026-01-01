"use client";

import React, { useCallback } from "react";
import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const testimonials = [
  {
    name: "Nitish K.",
    designation: "Chief Executive Officer",
    content: "I recently had the pleasure of working with Syed, and I couldn't be more impressed. Their professionalism, attention to detail, and dedication to delivering high-quality results exceeded all my expectations. From the initial consultation to the final delivery, they were always responsive, insightful, and genuinely invested in the success of our project. What stood out most was their ability to understand our unique needs and translate them into a solution that not only met but surpassed our goals.",
    date: "SQL Case Study • Aug 2024",
    image: "/testimonial_1.jpg"
  },
  {
    name: "Ali Raza",
    designation: "Data Analyst",
    content: "I highly recommend Abid for anyone seeking career guidance. He offers the perfect mix of motivation and technical strategy. From overcoming impostor syndrome to fine-tuning my resume and LinkedIn, his advice was specific, encouraging, and deeply insightful. A true expert in his field",
    date: "November 2025",
    image: "/testimonial_2.jpeg"
  },
  {
    name: "Michael Taal",
    designation: "BI Specialist at Stellar Data B.V",
    content: "Great Personality",
    date: "Power BI - Oct 2024",
    image: "/testimonial_3.jpeg"
  }
];

export default function TestimonialSection() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="card_bg rounded-2xl sm:rounded-3xl p-3 sm:p-6 md:p-8 lg:p-10">
      {/* Header Section */}
      <div className="text-center mb-6 sm:mb-8 md:mb-12">
        <div className="inline-flex items-center gap-1 sm:gap-2 bg-blue-100/10 border border-blue-200/20 rounded-full px-2 sm:px-4 py-1 sm:py-2 mb-3 sm:mb-6">
          <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-blue-400 rounded-full"></div>
          <span className="text-blue-400 text-xs sm:text-sm font-medium">Testimonial</span>
        </div>
        <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl font-bold text-white mb-2 sm:mb-4">
          What Clients Say
        </h1>
        <p className="text-gray-400 text-xs sm:text-sm md:text-lg max-w-2xl mx-auto">
          Real feedback from professionals who have experienced the value of my work.
        </p>
      </div>

      {/* Carousel Container */}
      <div className="max-w-4xl mx-auto relative group">
        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="flex-[0_0_100%] min-w-0 px-1 lg:px-4">
                <div className="dark:bg-background/10 rounded-xl sm:rounded-2xl p-3 sm:p-4 md:p-6 lg:p-12 border border-gray-800/50 hover:border-gray-700/70 transition-all duration-300 h-full flex flex-col items-center">
                  {/* Quote Icon */}
                  <div className="mb-3 sm:mb-6">
                    <div className="w-8 h-8 sm:w-12 sm:h-12 bg-blue-800/30 rounded-full flex items-center justify-center">
                      <svg
                        className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400"
                        fill="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                      </svg>
                    </div>
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-gray-300 text-xs sm:text-sm md:text-lg leading-relaxed mb-4 sm:mb-8 text-center italic flex-grow">
                    &ldquo;{testimonial.content}&rdquo;
                  </blockquote>

                  {/* Author Info */}
                  <div className="text-center mt-auto">
                    <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full mx-auto mb-2 sm:mb-4 overflow-hidden border-2 border-blue-500/30">
                      <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <h3 className="text-sm sm:text-lg md:text-xl font-semibold text-white mb-1">
                      {testimonial.name}
                    </h3>
                    <p className="text-blue-400 font-medium mb-1 text-xs sm:text-sm">
                      {testimonial.designation}
                    </p>
                    <p className="text-gray-400 text-xs sm:text-sm">
                      {testimonial.date}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={scrollPrev}
          className="absolute left-[-20px] lg:left-[-60px] top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/80 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 hidden md:block touch-manipulation"
        >
          <ChevronLeft className="w-6 h-6 text-white" />
        </button>
        <button
          onClick={scrollNext}
          className="absolute right-[-20px] lg:right-[-60px] top-1/2 -translate-y-1/2 bg-gray-800/50 hover:bg-gray-700/80 p-2 rounded-full transition-all opacity-0 group-hover:opacity-100 hidden md:block touch-manipulation"
        >
          <ChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>
    </div>
  );
}
