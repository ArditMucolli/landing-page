"use client";

import { useState, useEffect } from "react";
import HomepageLogos from "./HomepageLogos";
import CountdownTimer from "../CountdownTimer";
import Forms from "./Forms";
import Homepageicons from "./Homepageicons";
import VideoEmbed from "./VideoEmbed";
import BackgroundSVG from "@/public/assets/Homepage.svg"; // Import the SVG

export default function Homepage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // Set to true after the component mounts
  }, []);

  // Only render the component after it's mounted to avoid hydration issues
  if (!mounted) {
    return null;
  }

  return (
    <main className="relative h-[860px] w-full">
      {/* Wrapper for the background SVG */}
      <div className="absolute top-0 left-0 w-full h-full z-0">
        {/* Apply the SVG as a background */}
        <BackgroundSVG className="w-full h-full object-cover" />
      </div>

      {/* Content on top of the background image */}
      <div className="relative z-10">
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
