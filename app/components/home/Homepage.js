"use client";

import HomepageLogos from "./HomepageLogos";
import CountdownTimer from "../CountdownTimer";
import Forms from "./Forms";
import Homepageicons from "./Homepageicons";
import VideoEmbed from "./VideoEmbed";

export default function Homepage() {
  return (
    <main
      className="h-[860px] w-full bg-cover bg-center"
      style={{ backgroundImage: "url('/assets/Homepage.svg')" }}
    >
      <div>
        <HomepageLogos />
        <CountdownTimer targetDate="2025-02-20T00:00:00Z" />
        <p className="text-[#FFFFFF] md:text-[24px] text-[16px] text-center md:mt-10 mt-5">
          February 11 - 13, 2025 Essen | Germany
        </p>
        <Forms />
        <Homepageicons />
        <div className="md:mt-12 mt-24">
          <VideoEmbed />
        </div>
      </div>
    </main>
  );
}
