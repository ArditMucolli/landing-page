import { useState } from "react";
import Image from "next/image";

export default function Gallery() {
  const [showMore, setShowMore] = useState(false);

  const initialImages = [
    { src: "/assets/gallery/Frame1.svg" },
    { src: "/assets/gallery/Frame2.svg" },
    { src: "/assets/gallery/Frame3.svg" },
    { src: "/assets/gallery/Frame4.svg" },
    { src: "/assets/gallery/Frame5.svg" },
    { src: "/assets/gallery/Frame6.svg" },
  ];

  const additionalImages = [
    { src: "/assets/gallery/Frame1.svg" },
    { src: "/assets/gallery/Frame2.svg" },
    { src: "/assets/gallery/Frame3.svg" },
  ];

  const toggleShowMore = () => setShowMore(!showMore);

  return (
    <div className="p-10 max-w-[1066px] mx-auto">
      <div className="flex justify-between items-center mt-10 mb-10">
        <h1 className="md:text-[28px] text-[20px] font-semibold text-[#1D1D1F] dark:text-[#FFFFFF]">
          Galerie
        </h1>
      </div>

      {/* Grid Layout for Desktop and Mobile */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-5"
        style={{
          gridAutoFlow: "dense",
          rowGap: "10px",
        }}
      >
        {[...initialImages, ...(showMore ? additionalImages : [])].map(
          (image, index) => (
            <div
              key={index}
              className="relative"
              style={{
                height: "250px",
              }}
            >
              <Image
                src={image.src}
                alt={`Image ${index + 1}`}
                width={350}
                height={250}
                className="w-full h-full object-cover rounded-xl"
              />
            </div>
          )
        )}
      </div>

      <div className="flex justify-center mt-12">
        <button
          onClick={toggleShowMore}
          className="w-[160px] h-[48px] text-sm text-black bg-white dark:text-white dark:bg-[#1D1D1F] border-2 border-black dark:border-white rounded-full hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all"
        >
          {showMore ? "Show Less" : "Show More"}
        </button>
      </div>
    </div>
  );
}
