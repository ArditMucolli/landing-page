"use client";

import Countdown from "react-countdown";
import { useEffect, useState } from "react";

export default function CountdownTimer({ targetDate }) {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div className="flex gap-8 items-center justify-center text-xl font-semibold mt-12">
      <Countdown
        date={new Date(targetDate)}
        renderer={({ days, hours, minutes, seconds }) => (
          <>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[rgba(255,255,255,0.6)] w-[74px] h-[65px] md:w-[86px] md:h-[75px] flex items-center justify-center rounded-lg">
                <span className="text-4xl md:text-[40px] text-[#F7A304] bg-gradient-to-r from-[#F7A304] to-[#E5570D] bg-clip-text text-transparent">
                  {days}
                </span>
              </div>
              <span className="text-[14px] text-[#F2F2F2]">Days</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[rgba(255,255,255,0.6)] w-[74px] h-[65px] md:w-[86px] md:h-[75px] flex items-center justify-center rounded-lg">
                <span className="text-4xl md:text-[40px] text-[#F7A304] bg-gradient-to-r from-[#F7A304] to-[#E5570D] bg-clip-text text-transparent">
                  {hours}
                </span>
              </div>
              <span className="text-[14px] text-[#F2F2F2]">Hours</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[rgba(255,255,255,0.6)] w-[74px] h-[65px] md:w-[86px] md:h-[75px] flex items-center justify-center rounded-lg">
                <span className="text-4xl md:text-[40px] text-[#F7A304] bg-gradient-to-r from-[#F7A304] to-[#E5570D] bg-clip-text text-transparent">
                  {minutes}
                </span>
              </div>
              <span className="text-[14px] text-[#F2F2F2]">Minutes</span>
            </div>
            <div className="flex flex-col items-center justify-center">
              <div className="bg-[rgba(255,255,255,0.6)] w-[74px] h-[65px] md:w-[86px] md:h-[75px] flex items-center justify-center rounded-lg">
                <span className="text-4xl md:text-[40px] text-[#F7A304] bg-gradient-to-r from-[#F7A304] to-[#E5570D] bg-clip-text text-transparent">
                  {seconds}
                </span>
              </div>
              <span className="text-[14px] text-[#F2F2F2]">Seconds</span>
            </div>
          </>
        )}
      />
    </div>
  );
}
