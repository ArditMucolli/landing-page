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
      style={{ backgroundImage: "url('/assets/Homepage.png')" }}
    >
      <div>
        <HomepageLogos />
        <CountdownTimer targetDate="2025-02-20T00:00:00Z" />
        <p className="text-[#FFFFFF] text-[24px] text-center mt-10">
          February 11 - 13, 2025 Essen | Germany
        </p>
        <Forms />
        <Homepageicons />
        <div className="mt-12">
          <VideoEmbed />
        </div>
      </div>
    </main>
  );
}
