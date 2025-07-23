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
        <div className="grid p-6">
          {/* <div>
          <Image
            src="/_DSC8303.png"
            alt="profile_image"
            width={200}
            height={100}
          />
         </div> */}
          <div className=" flex flex-col justify-center p-4 gap-10 ">
            <div className="grid sm:grid-cols-5 items-center">
              <div className="col-span-4 flex items-center gap-4">
                <UserRound />
                <div className="flex flex-col">
                  <span className="">Hi, I&apos;m Syed Abid Hassan.</span>
                  <span className="text-sm uppercase opacity-50">
                    Data & Business Intelligence Professional
                  </span>
                </div>
              </div>
              <div className="flex items-center justify-self-auto gap-4">
                <div className="flex justify-center items-center mt-2">
                  <a href="https://github.com/Syed-Abid" className=" bg-card border   rounded-xl p-1">
                    <GithubIcon width={28} height={28} />
                  </a>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <a href="https://www.linkedin.com/in/syed-abid-hassan-bb569b1b8" className="bg-card border   rounded-xl p-1">
                    <LinkedInIcon width={28} height={28} />
                  </a>
                </div>
                <div className="flex justify-center items-center mt-2">
                  <a href="mailto:abidhassanjafri31@gmail.com" className="bg-card border   rounded-xl p-1">
                    <Mail width={28} height={28} />
                  </a>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-5">
              <div className="grid col-span-4 gap-4">
                <h2 className=" text-4xl sm:text-6xl font-bold">
                  Your Partner in Business Data Solutions
                </h2>
                <p className=" opacity-50">
                  Helping businesses understand their data better with easy-to-use dashboards / reports, clear insights, and smart solutions that support better decisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* </MagicCard> */}
    </div>
  );
}
