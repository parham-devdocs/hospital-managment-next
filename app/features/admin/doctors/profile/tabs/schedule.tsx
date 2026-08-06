import React from "react";
import { Clock } from "lucide-react";
import { ScheduleProps } from "./types";



const Schedule = ({
  availability}: ScheduleProps) => {
  return (
    <div className=" animate-fadeIn bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
     

      <div className="space-y-3">
        {availability.map((item) => {
          const isClosed = item.hours === "Closed";

          return (
            <div
              key={item.day}
              className={`flex items-center justify-between rounded-xl border p-4 transition-all duration-300 hover:shadow-md ${
                isClosed
                  ? "bg-red-50 border-red-100"
                  : "bg-gray-50 border-gray-100 hover:border-blue-200"
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className="w-10 h-10 rounded-full flex items-center justify-center"
                  style={{
                    backgroundColor: isClosed
                      ? "#fee2e2":"--primary"
                  }}
                >
                  <Clock
                    size={18}
                    color={isClosed ? "#ef4444" : "--primary"}
                  />
                </div>

                <div>
                  <p className="font-semibold text-gray-800">{item.day}</p>
                  <p className="text-sm text-gray-500">
                    {isClosed ? "Not Available" : "Available"}
                  </p>
                </div>
              </div>

              <div
                className={`font-medium text-sm px-3 py-1 rounded-full ${
                  isClosed
                    ? "bg-red-100 text-red-600"
                    : "bg-white text-gray-700 border border-gray-200"
                }`}
              >
                {item.hours}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Schedule;