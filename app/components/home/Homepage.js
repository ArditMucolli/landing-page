"use client";

import HomepageLogos from "./HomepageLogos";
import CountdownTimer from "../CountdownTimer";
import Forms from "./Forms";
import Homepageicons from "./Homepageicons";
import VideoEmbed from "./VideoEmbed";
import Head from "next/head";

export default function Homepage() {
  return (
    <>
      <Head>
        <link rel="preload" href="/assets/Homepage.svg" as="image" />
      </Head>

      <main
        className="min-h-screen w-full bg-cover bg-center bg-fixed"
        style={{ backgroundImage: "url('/assets/Homepage.svg')" }}
      >
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
    </>
  );
}
