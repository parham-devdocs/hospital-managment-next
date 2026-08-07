// src/features/admin/doctors/profile/tabs/tabBody.tsx
import About from "./about";
import Schedule from "./schedule";
import Services from "./services";
import useGet from "@/lib/hooks/useFetch";
import { TabList } from "./types";

const TabBody = ({
  activeTab,
  doctorId,
}: {
  activeTab: TabList;
  doctorId: string;
}) => {
  const getApiEndpoint = (tab: TabList, id: string) => {
    switch (tab) {
      case "about":
        return `doctor/${id}`;
      case "schedule":
        return `available-time/${id}`;
      case "services":
        return `services/${id}`;
      default:
        return `doctor/${id}`;
    }
  };

  const apiEndpoint = getApiEndpoint(activeTab, doctorId);
  const { data, error, isLoading } = useGet<any>(apiEndpoint)
  // Render loading state
  console.log(data)
  if (isLoading) {
    return (
      <div className="w-full h-full flex items-center justify-center py-12">
        <div className="text-gray-500">Loading...</div>
      </div>
    );
  }

  // Render error state
  if (error) {
    return (
      <div className="w-full h-full flex items-center justify-center py-12">
        <div className="text-red-500">Error: {error}</div>
      </div>
    );
  }

  // Check if data exists
  if (!data) {
    return (
      <div className="w-full h-full flex items-center justify-center py-12">
        <div className="text-gray-500">No data available</div>
      </div>
    );
  }
console.log(data)
  return (
    <div className="w-full h-full anim">
      {activeTab === "about" && <About doctorData={data} />}
      {activeTab === "schedule" && <Schedule availableTimeSlots={data} />}
      {activeTab === "services" && <Services services={data} />}
    </div>
  );
};

export default TabBody;