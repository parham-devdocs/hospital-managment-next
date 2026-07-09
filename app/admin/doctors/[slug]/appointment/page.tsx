import CustomCalendar from "@/app/features/admin/doctors/appointments";
import EventsSidebar from "@/app/features/admin/doctors/appointments/eventsSidebar";
import Header from "@/app/shared/components/header";
import { ClipboardList } from "lucide-react";

const Page = () => {
  return (
    <div className="p-6 space-y-4">
      <Header title="Appointments" icon={<ClipboardList />} />
      
      <div className="flex gap-10">
        {/* Calendar - 2 parts with max width */}
        <div className="flex-[2] ">
          <CustomCalendar />
        </div>

        {/* Sidebar - 1 part */}
        <div className="flex-1 min-w-0 sticky top-6">
          <EventsSidebar />
        </div>
      </div>
    </div>
  );
};

export default Page;