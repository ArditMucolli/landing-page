import Image from "next/image";

export default function Appointment() {
  return (
    <div className="h-[1091px] bg-gradient-to-b from-[#6C1EB0] via-[#ae7bdb] to-[#a866e2] p-10">
      <div className="w-[1066px] mx-auto flex justify-between items-center mt-10">
        <h1 className="text-[28px] max-w-[268px] text-left text-[#FFFFFF]">
          Vereinbaren Sie eine 15-minütige Demo
        </h1>
        <Image
          src="/assets/appointment/appointment.png"
          alt="icon"
          width={125}
          height={125}
        />
      </div>
      <div className="flex justify-center mt-10">
        <iframe
          src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0FsQowoD7jUa5_Hp0yiqmtKXK-HegJhEOnnteGNrR32F8lvVg-vr1Nm91MCILlZyMIj5QfChdR?gv=true"
          style={{ border: 0 }}
          width="100%"
          height="600"
          frameBorder="0"
          className="h-[777px] w-[1066px] border rounded-lg shadow-md bg-white"
          title="Google Calendar Appointment"
        />
      </div>
    </div>
  );
}
