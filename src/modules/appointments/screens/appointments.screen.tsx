import CustomCalendarComp from "../components/customCalendar";
import EventsSidebarComp from "../components/eventsSidebar";

export default async function AppointmentScreen({
    slug,
    date
  }: {
  slug:string,
  date:string
  }) {
   
  
  
    return (
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 lg:m-10">
        {/* Left side - Events */}
        <div className="lg:col-span-3">
          <CustomCalendarComp />
        </div>
        <div className="lg:col-span-1">
          <EventsSidebarComp  />
        </div>
      </div>
    );
  }
  