import Module from "./Module";

export default function About() {
  return (
    <div className="w-[1066px]  mx-auto mt-[500px] mb-36">
      <h1 className="text-[28px] text-[#1D1D1F] dark:text-[#FFFFFF] text-left">
        Die ONERI-Softwarelösung
      </h1>
      <p className="text-[24px] text-[#1D1D1F] dark:text-[#FFFFFF] text-left mt-4 ">
        ONERI ist eine leistungsstarke Plattform, die entwickelt wurde, um Ihre
        Geschäftsabläufe zu vereinfachen und zu verbessern. Mit einem Fokus auf
        Automatisierung, Organisation und Zusammenarbeit bietet ONERI alles, was
        Sie benötigen, um Teams, Vertrieb und Verträge effizient zu verwalten.
      </p>
      <Module />
      <p className="text-[24px] text-[#1D1D1F] dark:text-[#FFFFFF] text-left mt-4 l">
        ONERI optimiert Ihre Arbeitsprozesse und ermöglicht höhere Effizienz,
        bessere Teamarbeit und klügere Entscheidungen – alles in einer einzigen
        Suite!
      </p>
    </div>
  );
}
