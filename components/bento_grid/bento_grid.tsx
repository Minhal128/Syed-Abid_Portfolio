import Image from "next/image";
import ProfileGrid from "./profile_grid";
import { VelocityScroll } from "../ui/scroll-based-velocity";
// import { Meteors } from "../meteors";
import OribitingSkillsCircles from "./oribitingSkillsCircles";
// import { EyeIcon } from "lucide-react";
import Link from "next/link";
import { Ripple } from "../magicui/ripple";
import ServicesSection from "./services_section";
import TestimonialSection from "./testimonial_section";
// import { BorderBeam } from "../magicui/border-beam";
export default function BentoGrid() {
  return (
    <div className="grid gap-2 sm:gap-4 md:gap-6 lg:gap-10 overflow-hidden">
      {/* first col */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-2 sm:gap-4 md:gap-6 lg:gap-10">
        <div className="lg:col-span-2 dark:bg-background/5 rounded-2xl sm:rounded-3xl">
          <ProfileGrid />
        </div>
        {/* <MagicCard
          className="cursor-pointer flex flex-col items-center justify-center overflow-hidden"
          gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
        > */}
        <div className="relative card_bg flex flex-col items-center justify-center overflow-hidden h-[200px] sm:h-[250px] md:h-[300px] lg:h-auto">
          <div className="flex rounded-2xl sm:rounded-3xl items-center">
            <Image
              src="/_DSC8303.png"
              //  src="/bg1.png"
              alt="profile image"
              width="250"
              height="400"
              className="scale-90 sm:scale-100 md:scale-110 lg:scale-125 opacity-80 z-50 max-w-[140px] sm:max-w-[180px] md:max-w-[220px] lg:max-w-[250px]"
            />
            <Ripple className="opacity-30" />
          </div>
        </div>

        {/* </MagicCard> */}
        {/* <AnimatedGridPattern
          numSquares={30}
          maxOpacity={0.1}
          duration={3}
          repeatDelay={1}
          className={cn(
            "[mask-image:radial-gradient(500px_circle_at_center,white,transparent)]",
            "inset-x-0 inset-y-[-30%] h-[200%] skew-y-12 -z-10"
          )}
        /> */}
      </div>
      {/* second col */}
      <div className="grid grid-cols-1 lg:grid-cols-6 gap-2 sm:gap-4 md:gap-6 lg:gap-10">
        <div className="grid lg:col-span-2 grid-rows-1 sm:grid-rows-5 gap-2 sm:gap-4 w-full">
          <div className="dark:bg-background/5 card_bg rounded-full flex items-center justify-center overflow-hidden py-2 sm:py-0">
            <VelocityScroll className="uppercase text-xs sm:text-sm">
              <i className="font-thin"> Personal </i>
              <b>portfolio ⭐ </b>
            </VelocityScroll>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:row-span-4 gap-2 sm:gap-4 md:gap-6">
            <div className="dark:bg-background/5 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 card_bg flex flex-col justify-between gap-y-3 sm:gap-y-4 md:gap-y-6 items-start md:grid md:grid-rows-3 md:gap-y-4 text-left">
              <div className="flex flex-col items-center justify-center md:grid md:row-span-2 w-full">
                <Image
                  src={`/bg1.png`}
                  width={130}
                  height={150}
                  alt="cover"
                  className="w-auto h-auto max-h-[80px] sm:max-h-[100px] md:max-h-[120px] object-contain"
                />
              </div>
              <Link href="/credential" className="cursor-pointer group w-full touch-manipulation">
                <div className="text-left">
                  <h2 className="text-xs sm:text-sm font-normal uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                    About me
                  </h2>
                  <h1 className="text-sm sm:text-lg font-medium group-hover:text-blue-400 transition-colors">Credentials</h1>
                </div>
              </Link>
            </div>
            <div className="dark:bg-background/5 rounded-2xl sm:rounded-3xl p-3 sm:p-4 md:p-6 card_bg flex flex-col justify-between gap-y-3 sm:gap-y-4 md:gap-y-6 items-start md:grid md:grid-rows-3 md:gap-y-4 text-left">
              <div className="flex flex-col items-center justify-center gap-y-2 sm:gap-y-4 md:grid md:row-span-2 w-full">
                <span className="pointer-events-none whitespace-pre-wrap bg-gradient-to-b from-black to-gray-300 bg-clip-text text-center text-sm sm:text-lg md:text-xl font-semibold leading-none text-transparent dark:from-white dark:to-black">
                  My Projects
                </span>
                <div className="relative w-full flex justify-center">
                  <Image
                    src="/Graphic-Web-Design.png"
                    width={300}
                    height={200}
                    alt="project image"
                    className="w-full h-auto max-w-[100px] sm:max-w-[150px] md:max-w-[200px] object-contain"
                  />
                </div>
              </div>
              <Link href="/projects" className="group w-full touch-manipulation">
                <div className="text-left">
                  <h2 className="text-xs sm:text-sm font-normal uppercase opacity-50 group-hover:opacity-100 transition-opacity">
                    Showcase
                  </h2>
                  <h1 className="text-sm sm:text-lg font-medium group-hover:text-blue-400 transition-colors">Projects</h1>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="lg:col-span-4">
          {/* <MagicCard
            className="cursor-pointer flex flex-col items-center justify-center overflow-hidden"
            gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
          > */}
          <div className="relative card_bg rounded-2xl sm:rounded-3xl">
            <div className="grid grid-cols-1 sm:grid-cols-5 p-3 sm:p-4 md:p-6 lg:p-10 gap-3 sm:gap-4 md:gap-6">
              <div className="grid col-span-1 sm:col-span-2 gap-2 sm:gap-3 md:gap-4 text-left">
                <span className="text-xs sm:text-sm md:text-base">I am committed to continuous self-improvement and personal growth.</span>
                <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-5xl font-semibold leading-tight break-words max-w-[95%] sm:max-w-full">
                  Currently I Am Using
                </h1>
                <p className="opacity-50 text-xs sm:text-sm md:text-base max-w-[95%] sm:max-w-full leading-relaxed">
                  {" "}
                  I am actively enhancing my data visualization skills by consistently designing clear, impactful dashboards to effectively communicate data-driven insights
                </p>
              </div>
              {/* skills column */}
              <div className="col-span-1 sm:col-span-3">
                <div>
                  <OribitingSkillsCircles />
                </div>
              </div>
            </div>
          </div>
          {/* </MagicCard> */}
        </div>
      </div>

      {/* Services Section */}
      <div className="grid gap-2 sm:gap-4 md:gap-6 lg:gap-10">
        <ServicesSection />
      </div>

      {/* Testimonial Section */}
      <div className="grid gap-2 sm:gap-4 md:gap-6 lg:gap-10">
        <TestimonialSection />
      </div>
    </div>
  );
}
