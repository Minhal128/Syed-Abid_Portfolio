// import Image from "next/image";
// import { MagicCard } from "../ui/magic-card";
// import { useTheme } from "next-themes";
import { UserRound } from "lucide-react";
import GithubIcon from "../icons/github";
import LinkedInIcon from "../icons/linkedIn";
import Mail from "../icons/mail";
// import Link from "next/link";
// import { Button } from "../ui/button";
export default function ProfileGrid() {
  // const { theme } = useTheme();

  return (
    <div>
      {/* <MagicCard
        className=" flex flex-col items-center justify-center"
        gradientColor={theme === "dark" ? "#262626" : "#D9D9D955"}
      > */}
      <div className="flex flex-col items-center justify-center card_bg">
        <div className="grid p-2 sm:p-4 md:p-6">
          {/* <div>
          <Image
            src="/_DSC8303.png"
            alt="profile_image"
            width={200}
            height={100}
          />
         </div> */}
          <div className="flex flex-col justify-center p-1 sm:p-2 md:p-4 gap-3 sm:gap-6 md:gap-10 w-full overflow-hidden items-start text-left">
            <div className="flex flex-col md:grid md:grid-cols-5 items-start md:items-center gap-2 sm:gap-4 w-full">
              <div className="md:col-span-3 flex flex-row items-center justify-start gap-2 sm:gap-4">
                <div className="w-8 h-8 sm:w-10 sm:h-10 bg-blue-500/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <UserRound className="w-4 h-4 sm:w-6 sm:h-6 text-blue-400" />
                </div>
                <div className="flex flex-col min-w-0 items-start">
                  <span className="text-xs sm:text-sm md:text-base font-medium">Hi, I&apos;m Syed Abid Hassan.</span>
                  <span className="text-[8px] sm:text-[10px] md:text-sm uppercase opacity-50 tracking-wider">
                    Data & Business Intelligence Professional
                  </span>
                </div>
              </div>
              <div className="md:col-span-2 flex items-center gap-2 sm:gap-3 md:gap-4 justify-start md:justify-end">
                <a href="https://github.com/Syed-Abid" className="bg-card border border-white/10 rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 hover:bg-foreground/5 transition-all hover:scale-105 touch-manipulation">
                  <GithubIcon width={16} height={16} className="sm:w-5 sm:h-5" />
                </a>
                <a href="https://www.linkedin.com/in/syed-abid-hassan-bb569b1b8" className="bg-card border border-white/10 rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 hover:bg-foreground/5 transition-all hover:scale-105 touch-manipulation">
                  <LinkedInIcon width={16} height={16} className="sm:w-5 sm:h-5" />
                </a>
                <a href="mailto:abidhassanjafri31@gmail.com" className="bg-card border border-white/10 rounded-lg sm:rounded-xl p-1.5 sm:p-2.5 hover:bg-foreground/5 transition-all hover:scale-105 touch-manipulation">
                  <Mail width={16} height={16} className="sm:w-5 sm:h-5" />
                </a>
              </div>
            </div>
            <div className="w-full text-left">
              <h2 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight break-words text-pretty">
                Your Partner in Business Data Solutions
              </h2>
              <p className="opacity-50 text-xs sm:text-sm md:text-base mt-2 sm:mt-4 break-words max-w-[95%] md:max-w-full leading-relaxed">
                Helping businesses understand their data better with easy-to-use dashboards / reports, clear insights, and smart solutions that support better decisions
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* </MagicCard> */}
    </div>
  );
}
