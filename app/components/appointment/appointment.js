import Image from "next/image";

export default function Appointment() {
  return (
    <div className="h-[1091px] bg-gradient-to-b from-[#6C1EB0] via-[#ae7bdb] to-[#a866e2] p-10">
      <div className="w-full sm:w-[1066px] mx-auto flex  flex:row sm:flex-row justify-between items-center mt-10 px-4">
        <h1 className="text-[16px] sm:text-[28px] font-bold max-w-[180px] sm:max-w-[268px] text-left text-[#FFFFFF]">
          Vereinbaren Sie eine 15-minütige Demo
        </h1>
        <Image
          src="/assets/calendar-time-3.svg"
          alt="icon"
          width={125}
          height={125}
          className="h-[126px] w-[126px] mt-4 sm:mt-0 sm:ml-4"
        />
      </div>

      <div className="flex justify-center mt-10">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0FsQowoD7jUa5_Hp0yiqmtKXK-HegJhEOnnteGNrR32F8lvVg-vr1Nm91MCILlZyMIj5QfChdR?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          className="md:h-[777px] md:w-[1066px] w-[341px] h-[800px]  border rounded-lg shadow-md bg-white"
          title="Google Calendar Appointment"
          scrolling="no"
        />
      </div>
    </div>
  );
}
