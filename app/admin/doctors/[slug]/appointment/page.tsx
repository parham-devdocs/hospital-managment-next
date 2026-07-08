import CustomCalendar from "@/app/features/admin/doctors/appointments";
import EventsSidebar from "@/app/features/admin/doctors/appointments/eventsSidebar";
import Header from "@/app/shared/components/header";
import { ClipboardList } from "lucide-react";

const Page = () => {
  return (
    <div className="p-6 space-y-4">
      <Header title="Appointments" icon={<ClipboardList />} />
      
      {/* Main Content: Calendar + Sidebar with 1:3 ratio */}
      <div className="grid grid-cols-4 gap-5">
        {/* Calendar - Takes 3/4 of the space */}
        <div className="col-span-3">
          <CustomCalendar />
        </div>

        {/* Sidebar - Takes 1/4 of the space */}
        <div className="col-span-1">
          <EventsSidebar />
        </div>
      </div>
    </div>
  );
};

export default Page;