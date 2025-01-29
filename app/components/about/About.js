import Module from "./Module";

export default function About() {
  return (
    <div className="w-full mx-auto mt-[150px] mb-36 px-6 md:w-[1066px] md:mt-[500px]">
      <h1 className="text-[20px] sm:text-[24px] md:text-[28px] font-semibold text-[#1D1D1F] dark:text-[#FFFFFF] text-left sm:mt-4 md:mt-8">
        Die ONERI-Softwarelösung
      </h1>
      <p className="font-medium text-[16px] sm:text-[18px] md:text-[24px] text-[#1D1D1F] dark:text-[#FFFFFF] text-left mt-4 sm:mt-2 md:mt-6">
        ONERI ist eine leistungsstarke Plattform, die entwickelt wurde, um Ihre
        Geschäftsabläufe zu vereinfachen und zu verbessern. Mit einem Fokus auf
        Automatisierung, Organisation und Zusammenarbeit bietet ONERI alles, was
        Sie benötigen, um Teams, Vertrieb und Verträge effizient zu verwalten.
      </p>
      <Module />
      <p className="font-medium text-[16px] sm:text-[18px] md:text-[24px] text-[#1D1D1F] dark:text-[#FFFFFF] text-left mt-4 sm:mt-2 md:mt-6">
        ONERI optimiert Ihre Arbeitsprozesse und ermöglicht höhere Effizienz,
        bessere Teamarbeit und klügere Entscheidungen – alles in einer einzigen
        Suite!
      </p>
    </div>
  );
}
