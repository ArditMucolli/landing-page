import Image from "next/image";

export default function Module() {
  return (
    <div className="mt-10 mb-10">
      <h1 className="text-[20px] font-semibold md:text-[28px] text-[#1D1D1F] dark:text-[#FFFFFF] text-left">
        Hauptmodule:
      </h1>
      <ul className="flex flex-col gap-6 text-gray-700 ml-5 mt-7">
        <li className=" flex items-center gap-6">
          <Image
            src="/assets/module/users2.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <p className="text-[#1D1D1F] font-medium dark:text-[#FFFFFF] text-[16px] md:text-[24px]">
            Vertragsmanagement: Erstellen, bearbeiten und verwalten Sie Verträge
            mit individuell anpassbaren Vorlagen.
          </p>
        </li>
        <li className=" flex items-center gap-6">
          <Image
            src="/assets/module/users2.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <p className="text-[#1D1D1F] font-medium dark:text-[#FFFFFF] text-[16px] md:text-[24px]">
            Automatisierte Abrechnung: Berechnen und automatisieren Sie
            Auszahlungen für Mitarbeiter basierend auf abgeschlossenen
            Verträgen.
          </p>
        </li>
        <li className=" flex items-center gap-6">
          <Image
            src="/assets/module/users3.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <p className="text-[#1D1D1F] font-medium dark:text-[#FFFFFF] text-[16px] md:text-[24px]">
            Verkaufstracker: Organisieren und verfolgen Sie Leads, prüfen Sie
            die Nähe von Mitarbeitern zu Leads, visualisieren Sie Standorte auf
            einer Karte und importieren Sie Leads.
          </p>
        </li>
        <li className=" flex items-center gap-6">
          <Image
            src="/assets/module/users4.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <p className="text-[#1D1D1F] font-medium dark:text-[#FFFFFF] text-[16px] md:text-[24px]">
            Akademie: Entwickeln und teilen Sie Schulungsmaterialien wie Videos,
            Dokumente und Präsentationen mit Teams oder einzelnen Mitarbeitern.
          </p>
        </li>
        <li className=" flex items-center gap-6">
          <Image
            src="/assets/module/users5.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <p className="text-[#1D1D1F] font-medium dark:text-[#FFFFFF] text-[16px] md:text-[24px]">
            Kommunikationstool: Echtzeit-Chat, Gruppenkanäle, Dateifreigabe und
            Unternehmensnews halten Ihr Team stets verbunden und informiert.
          </p>
        </li>
        <li className=" flex items-center gap-6">
          <Image
            src="/assets/module/users6.svg"
            alt="icon"
            width={40}
            height={40}
          />
          <p className="text-[#1D1D1F] font-medium dark:text-[#FFFFFF] text-[16px] md:text-[24px]">
            Berichtswesen: Erstellen Sie detaillierte Berichte, um Leistung zu
            analysieren und datenbasierte Entscheidungen zu treffen.
          </p>
        </li>
      </ul>
    </div>
  );
}
