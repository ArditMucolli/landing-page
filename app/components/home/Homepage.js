"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import HomepageLogos from "./HomepageLogos";
import CountdownTimer from "../CountdownTimer";
import Forms from "./Forms";
import Homepageicons from "./Homepageicons";
import VideoEmbed from "./VideoEmbed";

export default function Homepage() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <main className="relative h-[860px] w-full">
      <Image
        src="/assets/Homepage.png"
        alt="Homepage Background"
        layout="fill"
        objectFit="cover"
        className="z-0"
      />
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
