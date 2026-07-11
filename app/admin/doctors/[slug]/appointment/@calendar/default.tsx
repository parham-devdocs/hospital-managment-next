// app/admin/doctors/[slug]/appointment/@left/[date]/page.tsx

import CustomCalendar from "@/app/features/admin/doctors/appointments/customCalendar";

export default function LeftPanel() {



  return (
    <div>
      <h3 className="text-lg font-semibold mb-4">📅 Calendar</h3>
      <CustomCalendar  />
    </div>
  );
}